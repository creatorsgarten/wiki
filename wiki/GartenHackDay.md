# Upcoming

- **Inventory tracking** ({% render 'Person', name: 'dtinth' %}, {% render 'Person', name: 'rayriffy' %}): Building the tool and produce labels so we can identify which equipments belong to Creatorsgarten and which are not.

- **Event photos**: {% render 'Person', name: 'faypichaya' %} raised an issue about event photos management “รูปอีเว้นในงานนี่ทีมเรามีวิธีเก้บอะไรมั้ย หรือโยนเข้าไดฟ์ปกติเลย”. Maybe we should consolidate the public event photos so people can find the photos of past events.

- **Image management** ({% render 'Person', name: 'dtinth' %}): ~~I am thinking about image hosting solutions, right now images are hosted on GitHub / Discord / Thai’s R3 bucket.~~ I built a system to upload images to Cloudinary after got inspired from talking with Cloudinary people at CityJS Singapore. However, this system is not integrated with our wiki editor yet.

- **Wiki editor** ({% render 'Person', name: 'rayriffy' %}): Riffy has an idea for improving the editor using [Plate JS](https://platejs.org/).

- **Insta360 Link websockets protocol reverse engineering** ({% render 'Person', name: 'dtinth' %}, {% render 'Person', name: 'rayriffy' %}): Insta360 Link Controller software version 1.4.1 supports remotely controlling the webcam using a web interface on the phone. From preliminary inspection, it is using the WebSocket protocol but the messages are binary format. The goal is to decipher this format and allow us to programmatically control the camera. Combined with Chrome’s [FaceDetection](https://developer.chrome.com/docs/capabilities/shape-detection#facedetector) API, we may be able to improve the face auto-tracking algorithm so that we (as the livestreaming crew) don’t have to babysit the camera as often.