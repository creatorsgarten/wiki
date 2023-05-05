---
equipments:
  - name: ATEM Mini Pro
    custody: Thai
    url: https://www.blackmagicdesign.com/products/atemmini
    description: Live production switcher with 4 HDMI inputs
    links:
      Manual: https://www.blackmagicdesign.com/products/atemmini/gettingstarted
      Tech Specs: https://www.blackmagicdesign.com/products/atemmini/techspecs/W-APS-14
    notes: USB-C out<br>4x HDMI in, 1x HDMI out (with audio)<br>2x stereo mini jack in
  - name: DJI MIC
    custody: Pub
    url: https://www.dji.com/mic
    description: Wireless microphone
    links:
      Manual: https://dl.djicdn.com/downloads/DJI_Mic/DJI_Mic_User_Manual_v1.0_en.pdf
      Tech Specs: https://www.dji.com/mic/specs
    notes: USB-C out<br>3.5mm headphone out<br>3.5mm TRS out (for camera)<br>4 hours operating time[^djimicbattery]<br>2m40s to charge
  - name: Insta360 Link
    custody: Pub
    url: https://www.insta360.com/product/insta360-link
    description: Gimbal webcam with head tracking
    links:
      Manual: https://dl.djicdn.com/downloads/DJI_Mic/DJI_Mic_User_Manual_v1.2_en.pdf
      Tech Specs: https://www.insta360.com/product/insta360-link#spece
    notes: USB-C out
---

:::lead
This page lists Creatorsgarten’s audio/video equipments and tracks who’s currently taking custody of it.
:::

{% capture newline %}
{% endcapture %}

| Equipment | Description &amp; Links | Notes | Custody |
| --------- | ----------------------- | ----- | ------- |{% liquid
for item in page.equipments
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

[^djimicbattery]: From running Creative coding meetup, we found that the receiver is the first equipment to run out of battery when not charged.