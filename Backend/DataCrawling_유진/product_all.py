# 카테고리, 제품번호, 제품 상세 페이지 링크, 제품 코드, 제품 이미지 링크 다 읽어와서 리스트화
from bs4 import BeautifulSoup
import requests
import os
import pandas as pd
import numpy
from urllib.request import urlopen
import locale
import sys
import codecs
import urllib3
from urllib import parse

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

url_head = "https://www.samsung.com/sec/support/model/"
url_tail = "/#downloads"
base_url = "https:"


# 파일 읽어와서 딕셔너리 만들기
product_code_dic = {}
with codecs.open('product_code_dic.txt', 'r', 'utf-8') as f:
    for line in f:
        key, value = line.strip().split(': ')
        product_code_dic[int(key)] = value
# print(product_code_dic)


product_detail_page_link_dict = {}
for i in range(1, len(product_code_dic) + 1):
    product_detail_page_link_dict[i] = url_head + product_code_dic[i] + url_tail

final_list = []

for key, product_code in product_code_dic.items():
    response = requests.get(product_detail_page_link_dict[key], verify=False)
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    product_dic = {}

    product_dic['category'] = 'printer'
    product_dic['product_detail_page_link'] = product_detail_page_link_dict[key]

    if len(soup.select('p.name')) == 0:
        product_dic['product_name'] = 0
        print(product_dic)
        continue
    product_name = soup.select('p.name')[0].text
    product_dic['product_name'] = product_name

    if len(soup.select('p.model')) == 0:
        product_dic['product_code'] = 0
        print(product_dic)
        continue
    product_code = soup.select('p.model')[0].text
    product_dic['product_code'] = product_code

    if len(soup.select('div.prod-img img')) == 0:
        product_dic['product_image_link'] = 0
        print(product_dic)
        continue

    for i in soup.select('div.prod-img img'):
        product_image_link = 'https:' + parse.quote(i['src'])
        if product_image_link == 'https:/sec/static/_images/temp/emptyImg.jpg':
            product_dic['product_image_link'] = 0
            print(product_dic)
            continue
        product_dic['product_image_link'] = product_image_link
        print(product_dic)

        try:
            with urlopen(product_image_link) as f:
                with open('C:/Python/webscrap_source/img/img' + str(key) + '.jpg', 'wb') as h:
                    ima = f.read()
                    h.write(ima)
        except:
            product_dic['product_image_link'] = 0
            print(product_dic)
