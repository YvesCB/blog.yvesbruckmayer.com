---
title: Linux Adventures
description: So I finally switched my main workstation PC to linux after being fed up with Windows.
date: '2024-06-15'
categories:
  - programming
  - tech
  - linux
coverimg: 'blog/240615_img/cover.jpg'
published: true
---

![img](/blog/240615_img/cover.jpg)

## Table of contents

## Why leave Windows?
I have been using Windows since *XP* although I was pretty young when using XP. The first version of Windows I remember using extensively was Windows 7 and I remember it being a good experience. *Windows 7* was a solid OS. It was fast, it look modern at the time and it was user friendly. It kept many of the things that made XP work so well but streamlined a lot of the daily use-case stuff. But after 7 is sort of where the trouble began for me and many other people. If you were around for it, then you know that *Windows 8* was not at all well received by pretty much anyone. The misdirected focus on a touch friendly interface was a turn off for pretty much the entirety of Windows' power users and most of the other changes felt unnecessary as well. And from there the journey continued to be a rocky one. Some stuff worked out well. Most people did consider 8.1 a much improved version of Windows 8 and following that we had *Windows 10*, which was also pretty well received. But especially with Windows 10 one trend became more noticeable. Microsoft seemed be unable to actually escape its own past. The number of legacy options grew larger and with it the number of doubled functionality. We had two different settings menus because Microsoft was well aware, that their new implementation of the settings wasn't nearly complete enough to actually replace the *Control Panel*. So things started feeling a bit off. These problems reached a peak with *Windows 11*. So many much of the interface was now cluttered with these jarring transitions from the new design of Windows back to all the legacy apps and functionality that they had to leave in. It took many updates for the OS to become more usable. Arguably it took a good amount for it to become usable at all. But those are more so general things that every Windows user has lamented about at least once or twice in their lifetime. Let's talk about some of the problems I had and why I finally decided to make the switch in 2024. 

I will actually start with a positive! I personally always liked the general design language Microsoft decided to go with for Windows 11. I actually liked the rounded corners, the increase of transparent elements, the sort of glass like styling of things. However, I've had my share of issues as well and just annoyances. I have been using WSL (WSL 2 to be precise) on my Windows machine for years and I always found it to be a great addition. It made so many of the development tasks so much easier. The *Linux* terminal is just superior to *CMD* or *PowerShell* in my opinion. Microsoft seems to agree because as time went on, they put in a lot of effort to make PowerShell behave more like a Linux style terminal but putting in many default aliases such as `ls` for `Get-ChildItem` and so on. But as I was using WSL more and more and especially after actually running full Linux distros on my Laptop for a few years, I felt more and more that it was time that I made the switch on my Desktop PC as well. Through the exposure I'd gotten with using Distros like *Ubuntu*, *Mint* and *Arch* natively on my Laptop and a lot of the things I'd learned about the Linux Command Line, I felt ready to actually switch for a long time. The final nail in the coffin was actually an issue I started having on Windows with memory usage. For some reason, my Windows decided to just randomly start eating up all my memory. My system has 32GB of memory but that didn't stop Windows from grabbing as much as 12GB immediately after start-up and with not many applications open at all. After about 6h of usage, the memory usage would jump to above 95% and would often peak at 100% at which point I would of course start having issues. When a OS runs out of memory, it begins a process called *paging* where it starts unloading parts of the data stored in RAM to other, more slower, storage like your hard drive. Even a fast NVMe drive isn't fast enough to make that process smooth enough to not cause stuttering. So, with that issue and all the annoyance it caused me, I was faced with a choice. I either could re-install Windows to hopefully fix the problem, or I could use the chance to just switch to Linux as I had planned to do anyway. The choice was clear.

## The switch to Linux
Even before actually making the switch, I'd pretty much decided on the distro and *DE* (Desktop Environment) that I was gonna use. I'd seen some videos about the new *KDE Plasma 6* and I really liked what I saw. I mean, look at this and tell me it doesn't look really appealing.

![img](/blog/240615_img/plasma-6-desktop.jpg)
