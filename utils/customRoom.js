const getCustomRoom = (type) => {
  let rooms;
  if (type === "trainee") {
    rooms = {
      alya: "461451",
      anin: "461452",
      cathcy: "461454",
      chelsea: "461458",
      cynthia: "461463",
      elin: "461475",
      danella: "461466",
      daisy: "461465",
      gendis: "461476",
      michie: "461481",
      abigail_rachel: "509985",
      adeline_wijaya: "509992",
      aisa_maharani_napitupulu: "509995",
      aurhel_alana: "509997",
      catherina_vallencia: "510000",
      fritzy_rosmerian: "510011",
      hillary_abigail: "510012",
      jazzlyn_trisha: "510013",
      letycia_moreen: "510014",
      michelle_levia: "510016",
      nayla_suji_aurelia: "510064",
      nina_tutachia: "510065",
      oline_manuel: "510067",
      regina_wilian: "510068",
      ribka_budiman: "510070",
      shabilqis_naila: "510071",
      victoria_kimberly: "510073",
    };
  } else {
    rooms = {
      amanda: "400710",
      lia: "400713",
      callie: "400714",
      ela: "400715",
      indira: "400716",
      lyn: "400717",
      raisha: "400718",
      gracie: "461478",
      greseel: "461479",
    };
  }

  return rooms;
};

module.exports = getCustomRoom;
