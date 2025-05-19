const studentData = {
    arman: {
      title: "Abuev Arman",
      description: "МИСТЕР VIBE — энергиясы мен позитиві жұқпалы жігіт!"
    },
    daryn: {
      title: "Amanbay Daryn",
      description: "ДВИЖ-MAN — кез келген іс-шараның жаны!"
    },
    gazy: {
      title: "Zhaksylyk Suingazy",
      description: "Kинг of Volleyball — спорттың серісі!"
    },
    shainami: {
      title: "Zagiyalova Yerke",
      description: "QYRQYN — сабырлы, бірақ батыл қыз!"
    },
    nurdos: {
        title: "Kulmyrzyn Nurdos",
        description: "QYRQYN — сабырлы, бірақ батыл қыз!"
      },
      nurba: {
        title: "Kadirdeyt Nurbakyt",
        description: "ДВИЖ-MAN — кез келген іс-шараның жаны!"
      },
      madina: {
        title: "Myrzahmet Madina",
        description: "Kинг of Volleyball — спорттың серісі!"
      },
      diana: {
        title: "Sabitova Diana",
        description: "QYRQYN — сабырлы, бірақ батыл қыз!"
      },
      ers: {
          title: "Satymhan Ersin",
          description: "QYRQYN — сабырлы, бірақ батыл қыз!"
        },
        nurdos: {
        title: "Kulmyrzyn Nurdos",
        description: "QYRQYN — сабырлы, бірақ батыл қыз!"
      },
      nurba: {
        title: "Kadirdeyt Nurbakyt",
        description: "ДВИЖ-MAN — кез келген іс-шараның жаны!"
      },
      madina: {
        title: "Myrzahmet Madina",
        description: "Kинг of Volleyball — спорттың серісі!"
      },
      diana: {
        title: "Sabitova Diana",
        description: "QYRQYN — сабырлы, бірақ батыл қыз!"
      },
      hasiets: {
          title: "Halykzhan Khasiet",
          description: "QYRQYN — сабырлы, бірақ батыл қыз!"
        },
    sanzhik: {
        title: "Suleymenov Sanjar",
        description: "QYRQYN — сабырлы, бірақ батыл қыз!"
        },
    beka: {
        title:"Muratbek Bekzhan",
        description: ""
    },
    safy: {
        title:"Zhalsylyk Sofia",
        description: ""
    },
    akzhan: {
        title:"Nurbolat Akzhan",
        description: ""
    },
    zhanarys: {
        title:"Amanzhul Zhanarys",
        description: ""
    },
  };
  
  function showModal(studentKey) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");
  
    if (studentData[studentKey]) {
      title.innerText = studentData[studentKey].title;
      description.innerText = studentData[studentKey].description;
    } else {
      title.innerText = "Аты белгісіз";
      description.innerText = "Ақпарат табылмады.";
    }
  
    modal.style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  // Модальды басқан кезде жабу
  window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  