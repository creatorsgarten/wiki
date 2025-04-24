---
---

:::lead
Our inventory item list is public at [**inventory.creatorsgarten.org**](https://inventory.creatorsgarten.org/).
:::

At Creatorsgarten, we have a wide variety of items contributed by our members or purchased for use in our events, including:

- [Portable monitors](/inventory/CG00001)
- [Mac Mini](/inventory/CG00004)
- USB cables
- Adapters
- Power strips
- Board games
- Marker boxes
- Tripods

During events, our equipment is often mixed with the venue's, which previously led to confusion about item ownership.

To solve this, we now maintain an inventory tracking system for all items belonging to Creatorsgarten:

- Each item receives an asset tag (e.g., CG00001) or a flag ID for cables, both featuring unique QR codes.
- QR code stickers or flags link directly to the item's page in our system.
- The item's page provides the datasheet and manual, so users know how to use the equipment and that it belongs to Creatorsgarten.

# Adding New Items to the Inventory

- Inventory tags are produced by {% render 'Person', name: 'dtinth' %}.
- The inventory database is maintained by {% render 'Person', name: 'dtinth' %} on our [[Grist]] instance.
- If a new item needs to be added, please contact {% render 'Person', name: 'dtinth' %} for assistance with generating asset tags and updating the database.

# Borrowing or Using Items

- There is currently no formal process for checking out items from the inventory.
- Members and event organizers are expected to return items to their original place after use.

# Inventory Storage and Custody

- Creatorsgarten does not have a dedicated storage space at the moment.
- Inventory items are kept in boxes, paper bags, or other containers, which are stored at members' houses.
- In the database, each item is assigned to a "container" (such as a box or bag).
- The system keeps track of who is in custody of each container.

# Labeling and Organizing Items

To label and organize inventory items:

- Use the [Asset Label Generator](https://creatorsgarten.github.io/asset-label-generator/) to generate image files for asset stickers and cable flags.
  - Enter the item or flag ID into the tool.
  - For flags, specify the wire diameter to adjust the flag size as needed.
- Print labels using a Brother P-Touch label printer, with the help of this web-based tool: https://notes.dt.in.th/BrotherPTWebUSB.
- Place stickers directly on items.
- Wrap flags around wires and cables.
- After labeling, add the corresponding data to the Grist database to keep the inventory up to date.
