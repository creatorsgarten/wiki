{% assign subpages = of | getsubpages -%}
{%- render 'PageList', pages: subpages -%}