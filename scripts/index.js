const count = document.getElementById('count');
const head = document.getElementById('head');
const giftbox = document.getElementById('merrywrap');
const canvasC = document.getElementById('c');

    // const toGalleryBtn = document.getElementById("toGalleryBtn");
    // const toBirthdayBtn = document.getElementById("toBirthdayBtn");

    const imageList = Array.from({length: 30}, (_, i) => `img${i+1}.jpg`);
        const timerEl = document.getElementById("timer");
    const startBtn = document.getElementById("startGameBtn");
    const gameScreen = document.getElementById("gameScreen");
    const timerScreen = document.getElementById("timerScreen");
    const galleryScreen = document.getElementById("galleryScreen");
    // const alisaScreen = document.getElementById("alisaScreen");
    const birthdayScreen = document.getElementById("birthdayScreen");
    const toGalleryBtn = document.getElementById("toGalleryBtn");
    const toBirthdayBtn = document.getElementById("toBirthdayBtn");
    // const toAlisaBtn = document.getElementById("toAlisaBtn");
    const balloonsContainer = document.getElementById("balloons");


    var bd = false ;
    // alisaScreen.style.display = "none"

toGalleryBtn.addEventListener("click", ()=>{
  console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss   ")
  remove_node(gameScreen)
  console.log("working  ")
  galleryScreen.classList.add("active");
  startGallery();
})



toBirthdayBtn.addEventListener("click", ()=>{
  console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss   ")
  remove_node(galleryScreen)
  console.log("working  ")
  // galleryScreen.classList.add("active");
  // birthdayScreen.classList.add("active");
  toBirthdayBtn.style.display = 'none';
  setTimeout(()=>{
    bd = true
    
  },500);
})

// toBirthdayBtn.addEventListener("click", ()=>{
//   console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss   ")
//   remove_node(galleryScreen)
//   console.log("working  ")
//   alisaScreen.classList.add("active");
//         to.style.display = 'none';
//       setTimeout(()=>{
//         Ali.classList.add("active");

//       },500);
// })
// galleryScreen.classList.remove("active");
      

// alisa_Function = () => {
//   alisaScreen.style.display = "visible";
//   remove_node("galleryScreen")
//   toBirthdayBtn.style.display = "block";
// }





function startGallery() {
  const gallery = document.getElementById("gallery");
  const toBirthdayBtn = document.getElementById("toBirthdayBtn");
  let i = 0;

  // imageList.push("Alisa.jpg");

  function showNextImage() {
    if (i >= imageList.length) return;

    const img = document.createElement("img");
    img.src = imageList[i];
    img.className = "gallery-img fullscreen-img";
    gallery.innerHTML = ""; // clear previous image
    gallery.appendChild(img);

    requestAnimationFrame(() => { img.style.opacity = 1; });

    setTimeout(() => {
      img.style.opacity = 0;
      setTimeout(() => {
        gallery.removeChild(img);
        i++;
        if (i === imageList.length) {
          showFinalSlide();
          toBirthdayBtn.addEventListener("click", ()=>{
          console.log("inside   ")
          remove_node(galleryScreen)
          console.log("working  ")
          toBirthdayBtn.style.display = 'none';
          setTimeout(()=>{
            bd = true
            
          },500);
        })
        } else {
          showNextImage();
        }
      }, 1000);
    }, 1500);
  }

  function showFinalSlide() {
    gallery.innerHTML = ""; // Clear everything

    const finalContainer = document.createElement("div");
    finalContainer.className = "final-slide";

    const finalImg = document.createElement("img");
    finalImg.src = "Alisa.jpg"; // Replace with your image path
    finalImg.className = "final-img";

    const finalText = document.createElement("p");
    finalText.textContent = "Happy 21st birthday to my favourite person I am thankful to Allah that I met you.You taught me things which no one taught me before.You have done things for me which no one ever did they may be small to you but for me they mean the world to me.The amount of happiness you have given me since we became friends no ever made me this happy or made me smile this much.I just can't get my head over the fact what deed of mine made Allah happy that you came in my life.You're just perfect in every single aspect there is just keep smiling because you deserve to smile.Alisa I will always be grateful for every single thing you did for me and everything you taught me.If there's a concept of another life I'll choose to be your friend in every single life.I don't know if you wouldn't be in my life what would have happened to me in simple words I was in a world filled with darkness and you came in my life as a light in that darkness I hope this friendship stays there forever thank you for every single thing you ever did for me Alisa once again I wish you a very happy birthday 🎈🎂🥳";
    finalText.className = "final-text";

    // var bp = toBirthdayBtn.parentNode ;
    // bp.removeChild(toBirthdayBtn);
    // toBirthdayBtn.style.position = "unset";

    finalContainer.appendChild(finalImg);
    finalContainer.appendChild(finalText);
    // finalContainer.appendChild(toBirthdayBtn);
    gallery.appendChild(finalContainer);

    requestAnimationFrame(() => {
      finalContainer.style.opacity = 1;
    });

    setTimeout(() => {
      toBirthdayBtn.style.display = "block";
    }, 2000);
  }

  showNextImage();
}

// function startGallery() {
//   const gallery = document.getElementById("gallery");
//   const toBirthdayBtn = document.getElementById("toBirthdayBtn");
//   let i = 0;

//   // imageList.push("Alisa.jpg");

//   function showNextImage() {
//     if (i >= imageList.length) return;

//     const img = document.createElement("img");
//     img.src = imageList[i];
//     img.className = "fade-img";
//     gallery.appendChild(img);

//     requestAnimationFrame(() => { img.style.opacity = 1; });

//     setTimeout(() => {
//       img.style.opacity = 0;
//       setTimeout(() => {
//         gallery.removeChild(img);
//         i++;
//         if (i === imageList.length) {
//           showFinalSlide(); // 👈 Final step
//         } else {
//           showNextImage();
//         }
//       }, 1000);
//     }, 1500);
//   }

//   function showFinalSlide() {
//     const finalContainer = document.createElement("div");
//     finalContainer.className = "final-slide";

//     const finalImg = document.createElement("img");
//     finalImg.src = "Alisa.jpg"; // 👈 Your final image
//     finalImg.className = "fade-img";

//     const finalText = document.createElement("p");
//     finalText.textContent = "Happy Birthday, Alisa! 🎉 You are amazing!";
//     finalText.className = "final-text";

//     finalContainer.appendChild(finalImg);
//     finalContainer.appendChild(finalText);
//     gallery.appendChild(finalContainer);

//     requestAnimationFrame(() => {
//       finalContainer.style.opacity = 1;
//     });

//     setTimeout(() => {
//       toBirthdayBtn.style.display = "block";
//     }, 2000); // Wait a bit before showing button
//   }

//   showNextImage();
// }
// function startGallery() {
//       const gallery = document.getElementById("gallery");
//       let i = 0;
//       // console.log(imageList)
//       imageList.push("Alisa.jpg")
//       function showNextImage() {
//         if (i >= imageList.length) return;
//         const img = document.createElement("img");
//         img.src = imageList[i];
//         gallery.appendChild(img);
//         requestAnimationFrame(() => { img.style.opacity = 1; });
//         setTimeout(() => {
//           img.style.opacity = 0;
//           setTimeout(() => {
//             gallery.removeChild(img);
//             i++;
//             if (i === imageList.length) {
//                 // alisa_Function()
                 
//               toBirthdayBtn.style.display = "block";
//             } else {
//               showNextImage();
//             }
//           }, 1000);
//         }, 1500);
//       }
//       showNextImage();
//     }

    


function elementExistsById(id) {
  // document.getElementById() returns the element object if found,
  // or null if no element with the specified ID is found.
  // We can directly convert this to a boolean.
  return document.getElementById(id) !== null;
}

function remove_node (node){
  if (node) {
    // Get the parent element of gameScreen
    const parentElement = node.parentNode;

    // Check if parentElement exists (it should, if gameScreen exists)
    if (parentElement) {
        parentElement.removeChild(node);
        console.log("gameScreen and its children removed successfully.");
    } else {
        console.warn("gameScreen has no parent element.");
    }
} else {
    console.warn("Element with ID 'gameScreen' not found.");
}
}


const config = {
  birthdate: 'june 25, 2025',
  name: 'Alisa'
};
    let score = 0;
    let ss = false;

function hideEverything() {
  head.style.display = 'none';
  count.style.display = 'none';
  giftbox.style.display = 'none';
  canvasC.style.display = 'none';
}

hideEverything();

const confettiSettings = { target: 'confetti' };
const confetti = new window.ConfettiGenerator(confettiSettings);
confetti.render();

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date(`${config.birthdate} 00:00:00`).getTime();
x = setInterval(function() {
  let now = new Date().getTime(),
    distance = countDown - now;

  document.getElementById('day').innerText = Math.floor(distance / day);
  document.getElementById('hour').innerText = Math.floor(
    (distance % day) / hour
  );
  document.getElementById('minute').innerText = Math.floor(
    (distance % hour) / minute
  );
  document.getElementById('second').innerText = Math.floor(
    (distance % minute) / second
  );

  let w = (c.width = window.innerWidth),
    h = (c.height = window.innerHeight),
    ctx = c.getContext('2d'),
    hw = w / 2, // half-width
    hh = h / 2,
    opts = {
      strings: ['HAPPY', 'BIRTHDAY!', config.name],
      charSize: 30,
      charSpacing: 35,
      lineHeight: 40,

      cx: w / 2,
      cy: h / 2,

      fireworkPrevPoints: 10,
      fireworkBaseLineWidth: 5,
      fireworkAddedLineWidth: 8,
      fireworkSpawnTime: 200,
      fireworkBaseReachTime: 30,
      fireworkAddedReachTime: 30,
      fireworkCircleBaseSize: 20,
      fireworkCircleAddedSize: 10,
      fireworkCircleBaseTime: 30,
      fireworkCircleAddedTime: 30,
      fireworkCircleFadeBaseTime: 10,
      fireworkCircleFadeAddedTime: 5,
      fireworkBaseShards: 5,
      fireworkAddedShards: 5,
      fireworkShardPrevPoints: 3,
      fireworkShardBaseVel: 4,
      fireworkShardAddedVel: 2,
      fireworkShardBaseSize: 3,
      fireworkShardAddedSize: 3,
      gravity: 0.1,
      upFlow: -0.1,
      letterContemplatingWaitTime: 360,
      balloonSpawnTime: 20,
      balloonBaseInflateTime: 10,
      balloonAddedInflateTime: 10,
      balloonBaseSize: 20,
      balloonAddedSize: 20,
      balloonBaseVel: 0.4,
      balloonAddedVel: 0.4,
      balloonBaseRadian: -(Math.PI / 2 - 0.5),
      balloonAddedRadian: -1
    },
    calc = {
      totalWidth:
        opts.charSpacing *
        Math.max(opts.strings[0].length, opts.strings[1].length)
    },
    Tau = Math.PI * 2,
    TauQuarter = Tau / 4,
    letters = [];

  ctx.font = opts.charSize + 'px Verdana';

  function Letter(char, x, y) {
    this.char = char;
    this.x = x;
    this.y = y;

    this.dx = -ctx.measureText(char).width / 2;
    this.dy = +opts.charSize / 2;

    this.fireworkDy = this.y - hh;

    let hue = (x / calc.totalWidth) * 360;

    this.color = 'hsl(hue,80%,50%)'.replace('hue', hue);
    this.lightAlphaColor = 'hsla(hue,80%,light%,alp)'.replace('hue', hue);
    this.lightColor = 'hsl(hue,80%,light%)'.replace('hue', hue);
    this.alphaColor = 'hsla(hue,80%,50%,alp)'.replace('hue', hue);

    this.reset();
  }
  Letter.prototype.reset = function() {
    this.phase = 'firework';
    this.tick = 0;
    this.spawned = false;
    this.spawningTime = (opts.fireworkSpawnTime * Math.random()) | 0;
    this.reachTime =
      (opts.fireworkBaseReachTime +
        opts.fireworkAddedReachTime * Math.random()) |
      0;
    this.lineWidth =
      opts.fireworkBaseLineWidth + opts.fireworkAddedLineWidth * Math.random();
    this.prevPoints = [[0, hh, 0]];
  };
  Letter.prototype.step = function() {
    if (this.phase === 'firework') {
      if (!this.spawned) {
        ++this.tick;
        if (this.tick >= this.spawningTime) {
          this.tick = 0;
          this.spawned = true;
        }
      } else {
        ++this.tick;

        let linearProportion = this.tick / this.reachTime,
          armonicProportion = Math.sin(linearProportion * TauQuarter),
          x = linearProportion * this.x,
          y = hh + armonicProportion * this.fireworkDy;

        if (this.prevPoints.length > opts.fireworkPrevPoints)
          this.prevPoints.shift();

        this.prevPoints.push([x, y, linearProportion * this.lineWidth]);

        let lineWidthProportion = 1 / (this.prevPoints.length - 1);

        for (let i = 1; i < this.prevPoints.length; ++i) {
          let point = this.prevPoints[i],
            point2 = this.prevPoints[i - 1];

          ctx.strokeStyle = this.alphaColor.replace(
            'alp',
            i / this.prevPoints.length
          );
          ctx.lineWidth = point[2] * lineWidthProportion * i;
          ctx.beginPath();
          ctx.moveTo(point[0], point[1]);
          ctx.lineTo(point2[0], point2[1]);
          ctx.stroke();
        }

        if (this.tick >= this.reachTime) {
          this.phase = 'contemplate';

          this.circleFinalSize =
            opts.fireworkCircleBaseSize +
            opts.fireworkCircleAddedSize * Math.random();
          this.circleCompleteTime =
            (opts.fireworkCircleBaseTime +
              opts.fireworkCircleAddedTime * Math.random()) |
            0;
          this.circleCreating = true;
          this.circleFading = false;

          this.circleFadeTime =
            (opts.fireworkCircleFadeBaseTime +
              opts.fireworkCircleFadeAddedTime * Math.random()) |
            0;
          this.tick = 0;
          this.tick2 = 0;

          this.shards = [];

          let shardCount =
              (opts.fireworkBaseShards +
                opts.fireworkAddedShards * Math.random()) |
              0,
            angle = Tau / shardCount,
            cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = 1,
            y = 0;

          for (let i = 0; i < shardCount; ++i) {
            let x1 = x;
            x = x * cos - y * sin;
            y = y * cos + x1 * sin;

            this.shards.push(new Shard(this.x, this.y, x, y, this.alphaColor));
          }
        }
      }
    } 
    if (this.phase === 'contemplate') {
      ++this.tick;

      if (this.circleCreating) {
        ++this.tick2;
        let proportion = this.tick2 / this.circleCompleteTime,
          armonic = -Math.cos(proportion * Math.PI) / 2 + 0.5;

        ctx.beginPath();
        ctx.fillStyle = this.lightAlphaColor
          .replace('light', 50 + 50 * proportion)
          .replace('alp', proportion);
        ctx.beginPath();
        ctx.arc(this.x, this.y, armonic * this.circleFinalSize, 0, Tau);
        ctx.fill();

        if (this.tick2 > this.circleCompleteTime) {
          this.tick2 = 0;
          this.circleCreating = false;
          this.circleFading = true;
        }
      } else if (this.circleFading) {
        ctx.fillStyle = this.lightColor.replace('light', 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

        ++this.tick2;
        let proportion = this.tick2 / this.circleFadeTime,
          armonic = -Math.cos(proportion * Math.PI) / 2 + 0.5;

        ctx.beginPath();
        ctx.fillStyle = this.lightAlphaColor
          .replace('light', 100)
          .replace('alp', 1 - armonic);
        ctx.arc(this.x, this.y, this.circleFinalSize, 0, Tau);
        ctx.fill();

        if (this.tick2 >= this.circleFadeTime) this.circleFading = false;
      } else {
        ctx.fillStyle = this.lightColor.replace('light', 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);
      }

      for (let i = 0; i < this.shards.length; ++i) {
        this.shards[i].step();

        if (!this.shards[i].alive) {
          this.shards.splice(i, 1);
          --i;
        }
      }

      if (this.tick > opts.letterContemplatingWaitTime) {
        this.phase = 'balloon';

        this.tick = 0;
        this.spawning = true;
        this.spawnTime = (opts.balloonSpawnTime * Math.random()) | 0;
        this.inflating = false;
        this.inflateTime =
          (opts.balloonBaseInflateTime +
            opts.balloonAddedInflateTime * Math.random()) |
          0;
        this.size =
          (opts.balloonBaseSize + opts.balloonAddedSize * Math.random()) | 0;

        let rad =
            opts.balloonBaseRadian + opts.balloonAddedRadian * Math.random(),
          vel = opts.balloonBaseVel + opts.balloonAddedVel * Math.random();

        this.vx = Math.cos(rad) * vel;
        this.vy = Math.sin(rad) * vel;
      }
    } 
    else if (this.phase === 'balloon') {
      ctx.strokeStyle = this.lightColor.replace('light', 80);

      if (this.spawning) {
        ++this.tick;
        ctx.fillStyle = this.lightColor.replace('light', 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

        if (this.tick >= this.spawnTime) {
          this.tick = 0;
          this.spawning = false;
          this.inflating = true;
        }
      } else if (this.inflating) {
        ++this.tick;

        let proportion = this.tick / this.inflateTime,
          x = (this.cx = this.x),
          y = (this.cy = this.y - this.size * proportion);

        ctx.fillStyle = this.alphaColor.replace('alp', proportion);
        ctx.beginPath();
        generateBalloonPath(x, y, this.size * proportion);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, this.y);
        ctx.stroke();

        ctx.fillStyle = this.lightColor.replace('light', 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

        if (this.tick >= this.inflateTime) {
          this.tick = 0;
          this.inflating = false;
        }
      } else {
        this.cx += this.vx;
        this.cy += this.vy += opts.upFlow;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        generateBalloonPath(this.cx, this.cy, this.size);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(this.cx, this.cy);
        ctx.lineTo(this.cx, this.cy + this.size);
        ctx.stroke();

        ctx.fillStyle = this.lightColor.replace('light', 70);
        ctx.fillText(
          this.char,
          this.cx + this.dx,
          this.cy + this.dy + this.size
        );

        if (this.cy + this.size < -hh || this.cx < -hw || this.cy > hw)
          this.phase = 'done';
      }
    }
  };

  function Shard(x, y, vx, vy, color) {
    let vel =
      opts.fireworkShardBaseVel + opts.fireworkShardAddedVel * Math.random();

    this.vx = vx * vel;
    this.vy = vy * vel;

    this.x = x;
    this.y = y;

    this.prevPoints = [[x, y]];
    this.color = color;

    this.alive = true;

    this.size =
      opts.fireworkShardBaseSize + opts.fireworkShardAddedSize * Math.random();
  }
  Shard.prototype.step = function() {
    this.x += this.vx;
    this.y += this.vy += opts.gravity;

    if (this.prevPoints.length > opts.fireworkShardPrevPoints)
      this.prevPoints.shift();

    this.prevPoints.push([this.x, this.y]);

    let lineWidthProportion = this.size / this.prevPoints.length;

    for (let k = 0; k < this.prevPoints.length - 1; ++k) {
      let point = this.prevPoints[k],
        point2 = this.prevPoints[k + 1];

      ctx.strokeStyle = this.color.replace('alp', k / this.prevPoints.length);
      ctx.lineWidth = k * lineWidthProportion;
      ctx.beginPath();
      ctx.moveTo(point[0], point[1]);
      ctx.lineTo(point2[0], point2[1]);
      ctx.stroke();
    }

    if (this.prevPoints[0][1] > hh) this.alive = false;
  };

  function generateBalloonPath(x, y, size) {
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(
      x - size / 2,
      y - size / 2,
      x - size / 4,
      y - size,
      x,
      y - size
    );
    ctx.bezierCurveTo(x + size / 4, y - size, x + size / 2, y - size / 2, x, y);
  }

  function anim() {
    window.requestAnimationFrame(anim);

    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, w, h);

    ctx.translate(hw, hh);

    let done = true;
    for (let l = 0; l < letters.length; ++l) {
      letters[l].step();
      if (letters[l].phase !== 'done') done = false;
    }

    ctx.translate(-hw, -hh);

    if (done) for (let l = 0; l < letters.length; ++l) letters[l].reset();
  }

  for (let i = 0; i < opts.strings.length; ++i) {
    for (let j = 0; j < opts.strings[i].length; ++j) {
      letters.push(
        new Letter(
          opts.strings[i][j],
          j * opts.charSpacing +
            opts.charSpacing / 2 -
            (opts.strings[i].length * opts.charSize) / 2,
          i * opts.lineHeight +
            opts.lineHeight / 2 -
            (opts.strings.length * opts.lineHeight) / 2
        )
      );
    }
  }

  window.addEventListener('resize', function() {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;

    hw = w / 2;
    hh = h / 2;

    ctx.font = opts.charSize + 'px Verdana';
  });

  if (distance > 0) {
    head.style.display = 'initial';
    count.style.display = 'initial';
  } else {
    
    ;(() => {
      // count.style.display = "none"; 
      console.log("this ")
      if (elementExistsById("gameScreen") == true){
      const gameArea = document.getElementById("gameArea");
      
        const can = document.createElement("img");
        can.src = "redbull.jpg";
        can.className = "can";
        can.style.left = Math.random() * (window.innerWidth - 60) + "px";
        can.style.top = Math.random() * (window.innerHeight - 100) + "px";
        can.onclick = () => {
          score++;
          document.getElementById("score").textContent = "Score: " + score;
          can.remove();
          if (score >= 10) {
            console.log("this done")
            toGalleryBtn.style.display = "block";
            // toGalleryBtn.onclick = () => {
            //   console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss   ")
            //   gameScreen.classList.remove("active");
            //   galleryScreen.classList.add("active");
            //   startGallery();
            // };
            // return;
          } else {
            toGalleryBtn.style.display = "none";
            // toAlisaBtn.style.display = "none";
            // spawnCan();
          }
        };
        gameArea.appendChild(can);
      }
      
      // spawnCan();
    })();



    

    // function startGallery() {
    //   const gallery = document.getElementById("gallery");
    //   let i = 0;
    //   function showNextImage() {
    //     if (i >= imageList.length) return;
    //     const img = document.createElement("img");
    //     img.src = imageList[i];
    //     gallery.appendChild(img);
    //     requestAnimationFrame(() => { img.style.opacity = 1; });
    //     setTimeout(() => {
    //       img.style.opacity = 0;
    //       setTimeout(() => {
    //         gallery.removeChild(img);
    //         i++;
    //         if (i === imageList.length) {
    //           toBirthdayBtn.style.display = "block";
    //         } else {
    //           showNextImage();
    //         }
    //       }, 1000);
    //     }, 1500);
    //   }
    //   showNextImage();
    // }

    // toBirthdayBtn.onclick = () => {
    //   galleryScreen.classList.remove("active");
    //   birthdayScreen.classList.add("active");
      
    //   showBirthdayMessage();
    // };
    
    if (bd == true){
      showBirthdayMessage();
    } 

    showBirthdayMessage = () => {

      head.style.display = 'none';
      count.style.display = 'none';
      giftbox.style.display = 'initial';
      clearInterval(x);
      let merrywrap = document.getElementById('merrywrap');
      let box = merrywrap.getElementsByClassName('giftbox')[0];
      let step = 1;
      let stepMinutes = [2000, 2000, 1000, 1000];

      function init() {
        box.addEventListener('click', openBox, false);
        box.addEventListener('click', showfireworks, false);
      }

      function stepClass(step) {
        merrywrap.className = 'merrywrap';
        merrywrap.className = 'merrywrap step-' + step;
      }

      function openBox() {
        if (step === 1) {
          box.removeEventListener('click', openBox, false);
        }
        stepClass(step);
        if (step === 3) {
        }
        if (step === 4) {
          return;
        }
        setTimeout(openBox, stepMinutes[step - 1]);
        step++;
        //   setTimeout(anim, 1900);
      }

      function showfireworks() {
        canvasC.style.display = 'initial';
        setTimeout(anim, 1500);
      }

      init();
    }
  }

  // if (distance < 0) {
  //     clearInterval(x);
  //     console.log("happy birthday");
  // }
}, second);
