
// Swiper slider mount

const swiper = new Swiper('.welcome-slider', {
    slidesPerView: 4,
    spaceBetween: 16
})

const slotsSlider = new Swiper('.slots-slider', {
    slidesPerView: 4,
    spaceBetween: 16,
    scrollbar: {
        el: ".swiper-scrollbar"
    },
})



// tabs initialize

var myTabs = tabs({
    el: '#tabs',
    tabNavigationLinks: '.c-tabs-nav__link',
    tabContentContainers: '.c-tab'
})

myTabs.init()


// Accordion initialize

const AccordionItem = document.querySelectorAll('#accordion .accordion-item')

for (let i = 0; i < AccordionItem.length; i++) {
    AccordionItem[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}

// Jewel Task function
var numJewelsInStones = function(jewels, stones) {

    let count = 0;

    for (let jw = 0; jw < jewels.length; jw++) {

        const jewel = jewels[jw]
        var re = new RegExp(jewel, "g")

        if (stones.match(re)) {
            count += stones.match(re).length
        }
        
    }

    return count
    
}

console.log('first-aA, second - aAAbbbb, result => ', numJewelsInStones("aA", "aAAbbbb"))
console.log('first-xx, second - XX, result => ', numJewelsInStones("xx", "XX"))
console.log('first-abc, second - aaBBacc, result => ', numJewelsInStones("abc", "aaBBacc"))


// isValid String Task

var isValid = function (s) {
    let opening = [ '(', '[', '{']
    let closing = [ ')', ']', '}']
    let arr = []

    for (let i = 0; i < s.length; i++) {
        if (opening.includes(s[i])) {
            arr.push(s[i])
        } else if (closing.indexOf(s[i]) === opening.indexOf(arr[arr.length - 1])) {
            arr.pop()
        } else {
            return false
        }
    }
    
    return arr.length === 0;
}

console.log('Input s = "()", result => ', isValid("()"))
console.log('Input s = "()[]{}", result => ', isValid("()[]{}"))
console.log('Input s = "(]", result => ', isValid("()]"))