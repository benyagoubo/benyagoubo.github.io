function affichesection(idActive,idbtn){
    const sections = ['profile','competances','deplomes','projets']; 
    const buttons = ['btn-profile','btn-projets','btn-competances','btn-deplomes'];
    
    sections.forEach(idSection=>{
        if(idSection === 'competances'){
            document.getElementById(idSection).style.display = (idSection === idActive)? 'flex' : 'none';
        }
        else if(idSection === 'deplomes'){
            document.getElementById(idSection).style.display = (idSection === idActive)? 'grid' : 'none';
        }else{
            document.getElementById(idSection).style.display = (idSection === idActive)? 'block' : 'none';
        }
    });
    buttons.forEach(idbutton=>{
        document.getElementById(idbutton).style.background = (idbutton === idbtn)? '#3B82F6' : '#F9FAFB';   
        document.getElementById(idbutton).style.color = (idbutton === idbtn)? '#ffffff' : '#000000'; 
    });
}
function afficheSkills(id){
    const skills = ['hard-skills','soft-skills','frontend-skills','backend-skills','tools-skills'];
    skills.forEach(idSkills=>{
        document.getElementById(idSkills).style.display = (idSkills === id)? 'block' : 'none';
    });

}
function afficheProjet(idSection,idbtn){
    const deplomes = ['web','desktop','experiences'];
    const buttons = ['btn-web','btn-desktop','btn-experience']
    deplomes.forEach(idDeplomes=>{
        document.getElementById(idDeplomes).style.display = (idDeplomes === idSection)? 'flex' : 'none';
    });
    buttons.forEach(idButtons=>{
        document.getElementById(idButtons).style.background = (idButtons === idbtn)? '#3B82F6' : '#F9FAFB';   
        document.getElementById(idButtons).style.color = (idButtons === idbtn)? '#ffffff' : '#000000'; 
    })
}
