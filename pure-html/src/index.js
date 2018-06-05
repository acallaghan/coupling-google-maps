import 'babel-polyfill';

const load = async (s) => {
  return new Promise(async r=>{
   document.scripts.forEach(script => {
     if (script.src == s) {
       return r()
     }
   })
   let element = document.createElement('script')
   element.src = s
   document.body.appendChild(element)
   element.onload = r
  })
}

const gmap = async (e) => {
  return new Promise(async fulfilled => {
     e.style.height = e.style.width = e.getAttribute('size')
     let latlng = e.getAttribute('latlng').split(',')
     await load('https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3')
     let map = new google.maps.Map(e, {
       center: new self.google.maps.LatLng(latlng[0], latlng[1]),
       zoom:   14
     });

     fulfilled(map)
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  let controls = document.querySelectorAll('div[control=gmap]')
  Promise.all(
    controls.map(control => {
      gmap(control)
    })
  )
})
