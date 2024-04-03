---
equipmentCustodyChoices:
  - Poom
  - Pub
  - Riffy
  - Thai
  - g0
equipments:
  - name: ATEM Mini Pro
    custody: Riffy
    type: av
    url: https://www.blackmagicdesign.com/products/atemmini
    description: Live production switcher with 4 HDMI inputs
    links:
      Manual: https://www.blackmagicdesign.com/products/atemmini/gettingstarted
      Tech Specs: https://www.blackmagicdesign.com/products/atemmini/techspecs/W-APS-14
    notes: USB-C out<br>4x HDMI in, 1x HDMI out (with audio)<br>2x stereo mini jack in
  - name: DJI MIC
    custody: Riffy
    type: av
    url: https://www.dji.com/mic
    description: Wireless microphone
    links:
      Manual: https://dl.djicdn.com/downloads/DJI_Mic/DJI_Mic_User_Manual_v1.0_en.pdf
      Tech Specs: https://www.dji.com/mic/specs
    notes: USB-C out<br>3.5mm headphone out<br>3.5mm TRS out (for camera)<br>4 hours operating time<br>2m40s to charge
  - name: Insta360 Link
    custody: Riffy
    type: av
    url: https://www.insta360.com/product/insta360-link
    description: Gimbal webcam with head tracking
    links:
      Manual: https://dl.djicdn.com/downloads/DJI_Mic/DJI_Mic_User_Manual_v1.2_en.pdf
      Tech Specs: https://www.insta360.com/product/insta360-link#spece
    notes: USB-C out<br>When streaming, enable Streamer Mode in More Settings to enable 60fps output
  - name: Mac mini (M2)
    custody: Riffy
    type: av
    url: https://apple.com/mac-mini
    description: Preloaded with editing, and streaming tools.
    link:
      Model Tech Specs: https://support.apple.com/kb/SP891?viewlocale=en_US&locale=en_US
  - name: Arzopa A1 Gamut Slim
    custody: Thai
    type: av
    url: https://www.arzopa.com/products/a1s-14-fhd-portable-monitor
    description: Portable monitor, 14-inch 1080p60
    link:
      Manual: https://cdn.shopify.com/s/files/1/0570/9280/0675/files/Arzopa_A1S.pdf?v=1707041874
    notes: USB-C video/power in<br>HDMI in<br>USB-C and HDMI cables included
  - name: Power Grid (Board game)
    custody: g0
    type: toy
    description: Board game guild
  - name: Rummikub
    custody: Riffy
    type: toy
    description: Board game guild
  - name: HDMI Cable
    custody: Thai
    type: av
    description: Length 5m
  - name: HDMI Cable
    custody: Thai
    type: av
    description: Length 10m
  - name: LEGO Box
    custody: g0
    type: toy
    description: There's 2 boxes full of LEGO bricks
  - name: Komono
    custody: Pub
    type: komono
    description: Small articles (小物)
    notes: Stickers<br>Shirts<br>Name tags
  - name: 3.5mm extender (x2)
    custody: g0 S2
    type: av
    description: Ugreen 3.5mm extender
  - name: USB-A extender (x2)
    custody: g0 S2
    type: av
    description: Ugreen 3.5mm extender
---

:::lead
This page lists Creatorsgarten’s physical stuff, and tracks who’s currently taking custody of it.
:::

{% capture newline %}
{% endcapture %}

{% assign types = page.equipments | map: 'type' | uniq | sort %}

# Inventory by type

{% for type in types %}

## {{ type }}

| Equipment | Description &amp; Links | Notes | Custody |
| --------- | ----------------------- | ----- | ------- |{% liquid
assign items = page.equipments | where: 'type', type
for item in items
  echo newline
  echo "| "
  if item.url
    echo "["
    echo item.name
    echo "]("
    echo item.url
    echo ")"
  else
    echo item.name
  endif
  echo " | "
  echo item.description
  echo "<br>"
  assign printed = false
  for link in item.links
    if printed
      echo " &middot; "
    endif
    assign printed = true
    echo "["
    echo link[0]
    echo "]("
    echo link[1]
    echo ")"
  endfor
  echo " | "
  echo item.notes
  echo " | "
  echo item.custody
  echo " |"
endfor
%}

{% endfor %}
