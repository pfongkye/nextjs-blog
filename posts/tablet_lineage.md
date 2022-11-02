---
title: 'Tablet ROM Flash'
date: '2022-11-02'
---

# Lineage On Tablet

I have a Samsung tablet ([GT-P5210](https://www.gsmarena.com/samsung_galaxy_tab_3_10_1_p5210-5478.php)) that has [Android 4.2.2](https://en.wikipedia.org/wiki/Android_Jelly_Bean) (Jelly Bean) with [TouchWiz UI](https://en.wikipedia.org/wiki/TouchWiz).

I wanted to see if I could get it updated to another more recent and lighter OS as I would like to use it mainly as an ebook reader. As prerequisites, I needed a computer, a microSD card installed on the tablet and a cable to connect via USB the computer to the tablet.

I searched the Internet and cross-checked data on different sites to have all the information needed before proceeding:
- Install [Odin](https://odindownload.com/) V3.10.6 (version must be compatible with tablet) on a computer. It is the official [ROM flashing tool](https://en.wikipedia.org/wiki/Odin_(firmware_flashing_software)) ([ROM](https://www.pcmag.com/encyclopedia/term/android-rom) stands for Read Only Memory) developed by Samsung. 
- Look for [latest tablet firmware](https://updato.com/download-samsung-galaxy-tab-3-firmware/france/gt-p5210/E7E121866BD111E69A56FA163EE8F90B/) to be used as recovery if needed.
- Connect the tablet to the computer by USB and enter tablet in Odin mode (POWER + volume DOWN + HOME)
- Use Odin to flash ROM with [TRWP](https://forum.xda-developers.com/t/recovery-gt-p52xx-unofficial-twrp-3-x-for-samsung-galaxy-tab-3-10-1.3340938/#post-65941300), a [recovery](https://twrp.me/) utility tool.
- Download [Lineage 14.1](https://forum.xda-developers.com/t/rom-gt-p52xx-unofficial-7-1-2-lineageos-14-1.3587761/) and [Open GApps](https://opengapps.org/) (the x86 7.1 nano bundle) and copy them to the root of the microSD external storage of the tablet. [Lineage](https://www.lineageos.org/) is an open source distribution available for multiple devices. Open GApps is for Google Apps packages (including [Google Play](https://play.google.com/store/apps) for example).
- Start tablet in recovery mode (POWER + volume UP + HOME).
    - click Wipe > Advanced Wipe > select partitions to wipe: Dalvik cache + System + cache + Data
    - Go back to main menu > Install > select storage (SD Card) and install Lineage
    - Go back to Install > install GApps
    - Reboot 

I had to take Open GApps nano bundle because the full package was too big to be installed on the laptop. Apart from this and the fact that it was a bit tedious to find all the necessary downloads, all went pretty smooth to install Lineage. 

Now I have [O'Reilly](https://www.oreilly.com/) app installed and ready for some good readings 📖
