window.addEventListener('scroll', onScroll)

 onscroll()

function onScroll ()  {
 shownavOnScroll()
 showbacktotopButtonOnScroll()

 activatemenuAtCurrentSection (home)
 activatemenuAtCurrentSection (services)
}
function activatemenuAtCurrentSection (section) {

// linha alvo

    const targetLine = scrollY + innerHeight / 2

// verificar se a seção passou da linha
// quais dados vou precisar?

// o topo da seção
const sectionTop = section.offsetTop

// a altura da seção
const sectionHeight = section.offsetHeight

// o topo da seção chegou ou ultrapassou a linha alto
const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

// verificar se a seção passou da linha
// quais dados vou precisar?

// a seção termina onde?
const sectionEndAt = sectionTop  + sectionHeight

// o final da seção passou a linha alvo
const sectionEndPassedTargetLine = sectionEndAt <= targetLine

console.log('o fundo da seção passou da linha?',
sectionEndPassedTargetLine)

//limites da seção 
const sectionBoundaries =
sectionTopReachOrPassedTargetLine && 
!sectionEndPassedTargetLine

const sectionId = section.getAtribute('id')
const menuElement = document
.querySelector(`.menu a[href*=${sectionId}]`)

menuElement.classList.remove('active')
 if (sectionBoundaries) {
    menuElement.classList.add('active')
 }
}






function shownavOnScroll() {
    if (scrollY > 0)  {
        navigation.classList.add('scroll')
      }  else {
          navigation.classList.remove('scroll')
      }
}
function showbacktotopButtonOnScroll(){
    if (scrollY > 400)  {
        backtotopButton.classList.add('show')
      }  else {
          backtotopButton.classList.remove('show')
      }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}


function closeMenu() {
    document.body.classList.remove('menu-expanded')
} 




ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
   #home,
   #home img,
   #home .stats,
   #services,
   #services header,
   #services .card
   #about
  #about header,
  #about .content`)


