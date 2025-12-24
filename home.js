function affichesection(idActive,idbtn){
    const sections = ['profile','competences','deplomes','projets']; 
    const buttons = ['btn-profile','btn-projets','btn-competances','btn-deplomes'];
    
    sections.forEach(idSection=>{
    document.getElementById(idSection).style.display = (idSection === idActive)? 'block' : 'none';
    });
    buttons.forEach(idbutton=>{
        document.getElementById(idbutton).style.background = (idbutton === idbtn)? '#F9FAFB' : '#3B82F6';    
    });
}
/*
function profile(){
    document.getElementById('profile').style.display = "block";
    document.getElementById('projets').style.display = "none";
    document.getElementById('competences').style.display = "none";
    document.getElementById('deplomes').style.display = "none";
        document.getElementById('btn-profile').style.background = "#3B82F6";
        document.getElementById('btn-projets').style.background = "#F9FAFB";
        document.getElementById('btn-competances').style.background = "#F9FAFB";
        document.getElementById('btn-deplomes').style.background = "#F9FAFB";
}
function projets(){
    document.getElementById('profile').style.display = "none";
    document.getElementById('projets').style.display = "block";
    document.getElementById('competences').style.display = "none";
    document.getElementById('deplomes').style.display = "none";
        document.getElementById('btn-profile').style.background = "#F9FAFB";
        document.getElementById('btn-projets').style.background = "#3B82F6";
        document.getElementById('btn-competances').style.background = "#F9FAFB";
        document.getElementById('btn-deplomes').style.background = "#F9FAFB";
}
function competances(){
    document.getElementById('profile').style.display = "none";
    document.getElementById('projets').style.display = "none";
    document.getElementById('competences').style.display = "flex";
    document.getElementById('deplomes').style.display = "none";
        document.getElementById('btn-profile').style.background = "#F9FAFB";
        document.getElementById('btn-projets').style.background = "#F9FAFB";
        document.getElementById('btn-competances').style.background = "#3B82F6";
        document.getElementById('btn-deplomes').style.background = "#F9FAFB";
}
function deplomes(){
    document.getElementById('profile').style.display = "none";
    document.getElementById('projets').style.display = "none";
    document.getElementById('competences').style.display = "none";
    document.getElementById('deplomes').style.display = "grid";
        document.getElementById('btn-profile').style.background = "#F9FAFB";
        document.getElementById('btn-projets').style.background = "#F9FAFB";
        document.getElementById('btn-competances').style.background = "#F9FAFB";
        document.getElementById('btn-deplomes').style.background = "#3B82F6";
}
*/



function hardskills(){
    document.getElementById('hard-skills').style.display = "block";
    document.getElementById('soft-skills').style.display = "none";
    document.getElementById('frontend-skills').style.display = "none";
    document.getElementById('backend-skills').style.display = "none";
    document.getElementById('tools-skills').style.display = "none";
}
function softskills(){
    document.getElementById('hard-skills').style.display = "none";
    document.getElementById('soft-skills').style.display = "block";
    document.getElementById('frontend-skills').style.display = "none";
    document.getElementById('backend-skills').style.display = "none";
    document.getElementById('tools-skills').style.display = "none";
}
function frontendskills(){
    document.getElementById('hard-skills').style.display = "none";
    document.getElementById('soft-skills').style.display = "none";
    document.getElementById('frontend-skills').style.display = "block";
    document.getElementById('backend-skills').style.display = "none";
    document.getElementById('tools-skills').style.display = "none";
}
function backendskills(){
    document.getElementById('hard-skills').style.display = "none";
    document.getElementById('soft-skills').style.display = "none";
    document.getElementById('frontend-skills').style.display = "none";
    document.getElementById('backend-skills').style.display = "block";
    document.getElementById('tools-skills').style.display = "none";
}
function toolsskills(){
    document.getElementById('hard-skills').style.display = "none";
    document.getElementById('soft-skills').style.display = "none";
    document.getElementById('frontend-skills').style.display = "none";
    document.getElementById('backend-skills').style.display = "none";
    document.getElementById('tools-skills').style.display = "block";
}
function web(){
    document.getElementById('web').style.display = "flex";
    document.getElementById('desktop').style.display = "none";
    document.getElementById('experiences').style.display = "none";
        document.getElementById('btn-web').style.background = "#3B82F6";
        document.getElementById('btn-desktop').style.background = "#F9FAFB";
        document.getElementById('btn-experience').style.background = "#F9FAFB";
}
function desktop(){
    document.getElementById('web').style.display = "none";
    document.getElementById('desktop').style.display = "flex";
    document.getElementById('experiences').style.display = "none";
        document.getElementById('btn-web').style.background = "#F9FAFB";
        document.getElementById('btn-desktop').style.background = "#3B82F6";
        document.getElementById('btn-experience').style.background = "#F9FAFB";
}
function experience(){
    document.getElementById('web').style.display = "none";
    document.getElementById('desktop').style.display = "none";
    document.getElementById('experiences').style.display = "flex";
        document.getElementById('btn-web').style.background = "#F9FAFB";
        document.getElementById('btn-desktop').style.background = "#F9FAFB";
        document.getElementById('btn-experience').style.background = "#3B82F6";
}