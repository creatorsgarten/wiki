{% assign subpages = of | get_subpages -%}
{%- render 'PageList', pages: subpages -%}