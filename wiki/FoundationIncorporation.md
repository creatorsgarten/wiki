Currently when it comes to dealing with monetary stuffs, especially when dealing with sponsoring companies, we depend on one of our partners to become a [fiscal host](https://docs.opencollective.com/help/fiscal-hosts/fiscal-hosts) for us. There have been some discussions about the prospect of incorporating a foundation, so that the group can self-manage all money. Documenting our financials is easy for us because we track all our financial contributions and expenses online and we make our balance tracking sheets public. The hard part may be other legal/paperwork/admistrative/logistics stuff. However our group has many software developers, so there may be some possibility to automate most of it (we are still not sure whether this is a problem that is worth spending time tackling or not, but it might be really cool to have an open source foundation where everything is completely transparent, i.e. on GitHub). However there may be other factors. We’re still not sure whether to start a foundation or not, but this page is here to document the body of knowledge, factors, and requirements.

Readings and resources:

- [How do I set up a foundation in Thailand?](https://www.siam-legal.com/Business-in-Thailand/thailand-foundation.php)
- [คู่มือการดำเนินงานมูลนิธิและสมาคม](http://www.oic.go.th/FILEWEB/CABINFOCENTER12/DRAWER094/GENERAL/DATA0000/00000095.PDF)
- [ตัวอย่าง - รายงานการดำเนินกิจการของมูลนิธิ](https://webportal.bangkok.go.th/upload/user/00000098/News/Procurement/1-64/1.pdf)
- [ตัวอย่าง - ข้อบังคับมูลนิธิ](https://webportal.bangkok.go.th/upload/user/00000063/Service/Administration/f11.pdf)
- [ตัวอย่าง - รายงานการประชุมจัดตั้งมูลนิธิ](https://webportal.bangkok.go.th/upload/user/00000063/Service/Administration/f30.pdf)

Prerequisites

- [x] __Name__
- [ ] __Principal office__ along with document that permits the use of that space
- [ ] __At least 3 people on the board__
- [ ] __500,000 THB of cash__ (maybe reduced to 200,000 THB?)
- [ ] __Regulations__
- [ ] __An approved auditor?__

Eligibility criteria in Thailand

- [__Microsoft__](https://www.microsoft.com/en-us/nonprofits/eligibility?activetab=pivot1%3aprimaryr4)
   - Organizations must be registered with or recognized by relevant authorities as: (1) tax exempt organizations; (2) public benefit organizations; (3) foundations or associations; or (4) foreign NGOs.
- [__Google__](https://support.google.com/nonprofits/answer/3215869?ref_topic=3247288)
   - Organizations must be currently registered with TechSoup Asia, TechSoup Global's regional arm.
   - Organizations must be registered with or recognized by relevant authorities as: (1) tax exempt organizations; (2) public benefit organizations; (3) foundations or associations; or (4) foreign NGOs.

Discussions

- @dtinth: After discussing with a friend, he recommends incorporating a private company instead. There will be less ceremony involved in running the company, and expenses can be used to deduct the corporate income tax. However, the name may not be as cool, and we cannot apply for non-profit offers, since although our group is non-profit, it is not officially recognized as such.

  - @chayapatr: It would be more ideal if we can benefit from non-profit offers. e.g. [Azure](https://www.microsoft.com/en-us/nonprofits/azure)
  - @dtinth: Also for a foundation, donations are not considered taxable income as per [section 2.5 of this PDF](http://www.oic.go.th/FILEWEB/CABINFOCENTER12/DRAWER094/GENERAL/DATA0000/00000095.PDF) but again a lot of documentation involved.

- @dtinth: There seems to be a lot of [formal meetings](https://www.opsmoac.go.th/km-km_org_center-files-391991791805) and documentations involved. Can these meetings be held asynchronously or conducted on Facebook Messenger or Discord? Can [some](https://webportal.bangkok.go.th/upload/user/00000098/News/Procurement/1-64/1.pdf) of the required documentations be automated in some ways?

- @dtinth: After chatting with p-Pop, after the foundation is running for **3 years** and have **audited financial track record** that at least 70% of the costs go to public good and at most 30% for operations.

- Setting up a non-profit [requires](https://www.prachachat.net/economy/news-619281):

  1. Must be registered as a non-profit organization with the Department of Provincial Administration
  2. The source and amount of money or assets must be disclosed and tax paperwork filed every year.
  3. Public audit reports by a certified public accountant
  4. Some restrictions on receiving money from non-Thais

# States

The situation can be expressed as roughly 4 states.

| State | Description | Pros | Cons |
| --- | --- | --- | --- |
| 1 | **Club** - (Current state) | No administrative overhead or paperwork as it is not recognized as a legal entity. | Need a corporation to act as a fiscal host (there may be complication but it depends), run our events in a cashless way, or money received from sponsors would be counted as taxable income. |
| 2 | **Private company** — Set up a legal entity (e.g. a company) to receive money from sponsors. | Can self-manage money. Little administration work needed. Expenses can be deducted from income when calculating taxes. | Less hassle but it is not apparent that our organization is not-commercial. We don’t get perks for non-profits. |
| 3 | **Non-profit organization** — Register as some kind of non-profit (including association or foundation). | Officially recognized as a non-profit, making us eligible for non-profit offers. | More administrative work is needed, including general meetings, statutes, and financial audits. Administration costs ~20,000 THB/year. |
| 4 | **Tax-exempt foundation** — Requires 3 years of track record being a foundation | Great for sponsors/donations as they can get their tax deducted. | Unsure if it is possible to begin with. Takes a long time to reach. We should determine if it’s worth aiming for. |

# Incorporation

From discussion on 2023-04-17: The path forward with a least friction would be to go to Step 2 first (start a “limited company”).

- Unlike other stages, this stage only requires 3 people and a physical address. Can probably be done within a few days.
  - @dtinth: Interested in incorporation under these conditions: (1) all financial tranactions public; (2) only founders, no employees, no salary; (3) someone can provide their address as company address; (4) financial automation tools developed as open source; (5) aim to keep as little money as possible (for safety).
  - @chayapatr: This will increase the operating costs due to overhead of taxation and process involved (e.g. have to visit the Revenue Department yearly).
  - @dtinth: If we want to be at stage 3/4 someday, we better learn how to properly manage money. By being in stage 2, we get to learn how to manage money, which will prepare us for stage 3. By being a legal entity, we also get to access corporate banking APIs, which we cannot do as individuals. This allows us to better streamline/automate our financials.
  - @chayapatr: Raised a concern that if we go to stage 2 first, it may prolong the process, and we might may never reach stage 3/4. In some cases, small incremental steps could not be sustained and in those cases it may be better to do a concentrated effort to push directly to stage 3.
