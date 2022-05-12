var APP_DATA = {
  "scenes": [
    {
      "id": "0-engineering-drive-1",
      "name": "Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.3851516132518107,
        "pitch": 0.05621813956432753,
        "fov": 1.0844416498847045
      },
      "linkHotspots": [
        {
          "yaw": 0.3851516132518107,
          "pitch": 0.05621813956432753,
          "rotation": 1.5707963267948966,
          "target": "1-eng-auditorium-atrium"
        },
        {
          "yaw": 1.0121190003738576,
          "pitch": -0.021405345185605995,
          "rotation": 0,
          "target": "2-eng-auditorium"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-eng-auditorium-atrium",
      "name": "Eng Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.786576360363746,
        "pitch": 0.06078438360827221,
        "fov": 1.0844416498847045
      },
      "linkHotspots": [
        {
          "yaw": -2.290908296135994,
          "pitch": 0.28545902696820846,
          "rotation": 0,
          "target": "2-eng-auditorium"
        },
        {
          "yaw": -3.0887701515625903,
          "pitch": -0.010153409175174488,
          "rotation": 0,
          "target": "0-engineering-drive-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-eng-auditorium",
      "name": "Eng Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.18439782966721907,
        "pitch": -0.010166640467669907,
        "fov": 1.0844416498847045
      },
      "linkHotspots": [
        {
          "yaw": 0.18439782966721907,
          "pitch": -0.010166640467669907,
          "rotation": 0.7853981633974483,
          "target": "0-engineering-drive-1"
        },
        {
          "yaw": 0.7034704482998215,
          "pitch": 0.14357711305255094,
          "rotation": 0,
          "target": "1-eng-auditorium-atrium"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SoE",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
