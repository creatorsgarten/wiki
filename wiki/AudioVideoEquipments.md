:::lead
This page lists Creatorsgarten’s audio/video equipments and tracks who’s currently taking custody of it.
:::

The data is sourced from the [[Inventory]] page.

{% capture newline %}
{% endcapture %}

| Equipment | Description &amp; Links | Notes | Custody |
| --------- | ----------------------- | ----- | ------- |{% liquid
assign inventory = 'Inventory' | get_page
for item in inventory.data.equipments | where: 'type', 'av'
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
