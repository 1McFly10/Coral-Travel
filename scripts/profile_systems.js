let profile_card = document.querySelectorAll('.profile-card');
let profile_logos = $('.profile-logos img');
console.log(profile_card);
profile_card[0].style.display = 'flex';
$('.profile-logos img').click((e)=>{
    if(e.target.id === 'one'){
        profile_card[0].style.display = 'flex';
        profile_card[1].style.display = 'none';
        profile_card[2].style.display = 'none';
        profile_card[3].style.display = 'none';

        for (let i = 0; i < profile_logos.length; i++){
            profile_logos[i].className = 'passive-logo';
        }
        profile_logos[0].className='active-logo';
    }
    if(e.target.id === 'two'){
        profile_card[0].style.display = 'none';
        profile_card[1].style.display = 'flex';
        profile_card[2].style.display = 'none';
        profile_card[3].style.display = 'none';
        for (let i = 0; i < profile_logos.length; i++){
            profile_logos[i].className = 'passive-logo';
        }
        profile_logos[1].className='active-logo';
    }
    if(e.target.id === 'three'){
        profile_card[0].style.display = 'none';
        profile_card[1].style.display = 'none';
        profile_card[2].style.display = 'flex';
        profile_card[3].style.display = 'none';
        for (let i = 0; i < profile_logos.length; i++){
            profile_logos[i].className = 'passive-logo';
        }
        profile_logos[2].className='active-logo';
    }
    if(e.target.id === 'four'){
        profile_card[0].style.display = 'none';
        profile_card[1].style.display = 'none';
        profile_card[2].style.display = 'none';
        profile_card[3].style.display = 'flex';
        for (let i = 0; i < profile_logos.length; i++){
            profile_logos[i].className = 'passive-logo';
        }
        profile_logos[3].className='active-logo';
    }
});

function show_profile() {

}