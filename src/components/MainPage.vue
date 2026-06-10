<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle, } from '@/components/ui/navigation-menu'

const mobileMenuOpen = ref(false)
const menuRef = ref()
onClickOutside(menuRef, () => { mobileMenuOpen.value = false })
const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#aboutme' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]
</script>
<template>
  <div class="w-full md:p-6 sm:pt-0 sm:pb-2">
    <div class="flex items-center justify-between p-4 md:hidden relative" ref="menuRef">
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 pl-3 pr-3 rounded-md border text-amber-50">☰</button>
    </div>
    <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-md">
      <a v-for="item in menuItems" :key="item.name" :href="item.href" @click="mobileMenuOpen = false" class="block px-4 py-3 border-b hover:bg-gray-100">
        {{ item.name }}
      </a>
    </div>
    <!-- d -->
    <div class="hidden md:flex justify-center">
      <NavigationMenu :viewport="false">
        <NavigationMenuList class="justify-between lg:w-3xl md:w-full max-w-5xl bg-white rounded-md pr-4 pl-4">
          <NavigationMenuItem v-for="item in menuItems" :key="item.name">
            <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
              <a :href="item.href">
                {{ item.name }}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
  <div class="my-portfolio-section-info xl:pr-64 xl:pl-64 lg:pr-32 lg:pl-32 md:pr-18 md:pl-18 sm:pr-5 sm:pl-5">
    <div class="my-portfolio-section-home" id="home">
      <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2">
        <div class="col-span-1 text-white space-y-3 text-center md:text-left m-auto">
          <h2 class="text-lg md:text-xl">
            Hi There,
          </h2>
          <h1 class="text-3xl md:text-6xl font-bold leading-tight">
            I’m Tannlengkim <span class="text-yellow-400">Hong</span>
          </h1>
          <h3 class="text-xl md:text-2xl font-medium text-gray-300">
            Web Developer
          </h3>
        </div>
        <div class="col-span-1 flex justify-end">
          <Card class="p-0 overflow-hidden border-0 lg:w-xs md:w-60">
            <CardContent class="p-0">
              <img src="../assets/LK-photo-main-01.jpg" alt="LK-photo-main-01">
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <div class="my-portfolio-section-about" id="aboutme">
      <h3 class="text-xl md:text-2xl font-bold text-gray-300 text-center md:p-6 p-4">
        About Me
      </h3>
      <div class="section-about-me-info">
        <p class="text-white text-justify pr-4 pl-4 md:p-0">Hi, I'm Hong Tannlengkim, a passionate Web Developer with experience in building modern and responsive web applications.<br>After graduating from university, I started my career as a Front-End Developer, working with technologies such as HTML, CSS, Bootstrap, Tailwind CSS, and Vue.js. I have also gained valuable professional experience working as a staff member at the Ministry of Tourism for one year and the Ministry of Inspection for another year, where I developed strong problem-solving, teamwork, and organizational skills.<br>As technology continues to evolve, I am passionate about expanding my expertise in Back-End Development, particularly with Java and Spring Boot. I enjoy building personal projects to improve my skills and deepen my understanding of full-stack development.<br><b>"I am excited to continue my journey as a junior developer, learning from experienced professionals and contributing to impactful projects."</b></p>
      </div>
    </div>
    <div class="my-portfolio-section-skills pt-6" id="skills">
      <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2">
        <div class="col-span-1 flex justify-start">
          <Card class="p-0 overflow-hidden border-0 lg:w-xs md:w-60 h-fit">
            <CardContent class="p-0">
              <img src="../assets/LK-photo-main-02.jpg" alt="LK-photo-main-02">
            </CardContent>
          </Card>
        </div>
        <div class="col-span-1 space-y-3 text-center md:text-left">
          <h3 class="text-xl md:text-2xl font-bold md:text-white sm:text-gray-800">
            My Skills
          </h3>
          <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-3">
            <p>HTML</p>
            <p>Bootstrap</p>
            <p>Tailwind CSS</p>
            <p>WordPress</p>
            <p>Vue Js</p>
            <p>JAVA Spring Boot</p>
            <p>MySQL</p>
            <p>PostgreSQL</p>
            <p>Postman</p>
            <p>GitLab</p>
            <p>Figmar</p>
          </div>
          <div class="my-portfolio-section-Education" id="education">
            <h3 class="text-xl md:text-2xl text-gray-800 p-0 font-bold">
              My Education
            </h3>
            <ul class="md:list-disc sm:list-none pl-4 pt-4">
              <li class=" text-gray-800">
                <p class="font-bold">2019 - 2023</p>
                <p>Graduated in Computer Information Technology at Cambodian Mekong University</p>
              </li>
              <li class=" text-gray-800 pt-2">
                <p class="font-bold">2016 - 2019</p>
                <p>Graduated at Hun Sen S'ang Highschool</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="my-portfolio-section-Work text-gray-800" id="work">
      <h3 class="text-xl md:text-2xl font-bold md:p-6 p-4 text-center">
        My Work
      </h3>
      <p class="text-justify md:p-0 pr-4 pl-4">Organize webpages of Ministry of Tourism Cambodia <a href="https://www.tourism.gov.kh" class=" text-gray-950 font-bold" target="_blank" rel="noopener noreferrer">tourism.gov.kh</a>, Data management system for Ministry of Tourism Cambodia <a href="https://www.license-management.digitali.team" class=" text-gray-950 font-bold" target="_blank" rel="noopener noreferrer">license-management.digitali.team</a>, schedule management at Ministry of Inspection Cambodia <a href="https://www.schedule.digitali.team" class=" text-gray-950 font-bold" target="_blank" rel="noopener noreferrer">schedule.digitali.team</a>, Organize webpage of private business <a href="https://www.campitalinvestment.com" class=" text-gray-950 font-bold" target="_blank" rel="noopener noreferrer">campitalinvestment.com</a>, Small POS café (Own project), my Portfolio.</p>
    </div>
    <div class="my-portfolio-section-Experience text-gray-800" id="experience">
      <h3 class="text-xl md:text-2xl font-bold md:p-6 p-4 text-center">
        My Experience
      </h3>
      <ul class="md:list-disc sm:list-none pl-4 grid grid-cols-2 gap-2">
        <li>
          <p class="font-bold">Dec 2025 - Jun 2026</p>
          <p>Internship of MIS at LOLC (Cambodia) PLC. (Core Banking System)</p>
        </li>
        <li class=" list-none"></li>
        <li>
          <p class="font-bold">Jan 2025 - Nov 2025</p>
          <p>Front-end web Developer (Contract Officer) at Ministry of Inspection, Cambodia</p>
        </li>
        <li>
          <p class="font-bold">Jan 2024 - Dec 2024</p>
          <p>Front-end web Developer (Contract Officer) at Ministry of Tourism, Cambodia</p>
        </li>
        <li>
          <p class="font-bold">Oct 2023 - May 2024</p>
          <p>Senior Staff in Office of Maintenance at Cambodian Mekong University</p>
        </li>
        <li>
          <p class="font-bold">Jan 2020 - Oct 2023</p>
          <p>Staff in Office of Maintenance at Cambodian Mekong University</p>
        </li>
      </ul>
    </div>
    <div class="my-portfolio-section-Contact text-gray-800 pb-12" id="contact">
      <h3 class="text-xl md:text-2xl font-bold md:p-6 p-4 text-center">
        My Contact
      </h3>
      <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-2">
        <div class="info-contact-left flex gap-8 justify-center">
          <div class="">
            <a href="https://www.linkedin.com/in/hong-tannlengkim-a78b04236" target="_blank" rel="noopener noreferrer"><img src="../assets/TablerBrandLinkedinFilled.svg" alt="LinkedIn"></a>
          </div>
          <div class="">
            <a href="https://www.facebook.com/share/1C66odcKR5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><img src="../assets/Facebook1Solid.svg" alt="Facebook"></a>
          </div>
          <div class="">
            <a href="https://www.tiktok.com/@lkim2001?_r=1&_t=ZS-975GidTTUZ7" target="_blank" rel="noopener noreferrer"><img src="../assets/IconoirTiktokSolid.svg" alt="TikTok"></a>
          </div>
        </div>
        <div class="info-contact-right md:p-0 pl-4">
          <div class="flex items-center">
            <div class="pr-2"><img src="../assets/MaterialSymbolsMarkEmailUnreadRounded.svg" alt="" class="w-5"></div>
            <p>hongtannlengkim19@gmail.com</p>
          </div>
          <div class="flex pt-4 pb-4 items-center">
            <div class="pr-2"><img src="../assets/MaterialSymbolsPhoneInTalk.svg" alt="" class="w-5"></div>
            <p>098 812 954</p>
          </div>
          <div class="flex items-center">
            <div class="pr-2"><img src="../assets/MaterialSymbolsPinDropRounded.svg" alt="" class="w-10"></div>
            <p>#271, St.Yothapol Kemarak Phomin, Sankat Teuk Thla, Khan Sen Sok, Phnom Penh, Cambodia.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>