import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import styles from './contactMe.module.scss';
import { Engine, Render, Runner, Bodies, Composite, World } from 'matter-js';
import Matter from 'matter-js';
import Two from 'two.js';
const ContactMe = () => {
  const engine = useRef(Engine.create());
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (element.current) {
      const render = Render.create({
        element: element.current,
        engine: engine.current,
        options: {
          width: 800,
          height: 600,
          wireframes: false,
          background: 'transparent',
        },
      });
      var two = new Two({
        type: Two.Types.canvas,
        fullscreen: true,
        autostart: true,
      }).appendTo(element.current);

      engine.current.gravity.y = 0;
      engine.current.gravity.x = 0;
      var boxA = Bodies.circle(400, 200, 80, {
        render: {
          fillStyle: '#F35e66',
          strokeStyle: 'black',
          lineWidth: 1,
          //  sprite: {
          //    texture: '../../assets/ball.png',
          //    xScale: 10,
          //    yScale: 10,
          //  },
        },
      });
      boxA.frictionAir = 0;
      boxA.friction = 0;
      boxA.restitution = 1;
      Matter.Body.setVelocity(boxA, {
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4,
      });

      var groundBottom = Bodies.rectangle(400, 0, 800, 50, { isStatic: true });
      var groundtop = Bodies.rectangle(400, 600, 800, 50, { isStatic: true });
      var groundRight = Bodies.rectangle(800, 300, 50, 600, { isStatic: true });
      var groundLeft = Bodies.rectangle(0, 300, 50, 600, { isStatic: true });

      // add all of the bodies to the world
      Composite.add(engine.current.world, [
        boxA,
        groundBottom,
        groundtop,
        groundLeft,
        groundRight,
      ]);
      // const loadImage = (url: any, onSuccess: any, onError: any) => {
      //   const img = new Image();
      //   console.log(
      //     '🚀 ~ file: contactMe.tsx ~ line 57 ~ loadImage ~ img',
      //     img
      //   );
      //   img.src = url;
      //   img.onload = () => {
      //      console.log("🚀 ~ file: contactMe.tsx ~ line 64 ~ loadImage ~ img.src", img.src)
      //     onSuccess(img.src);
      //   };
      //   img.onerror = onError();
      //   img.src = url;
      // };
      // loadImage(
      //   '../../assets/codeEditor.jpg',
      //   (url: any) => {
      //     console.log('Success');
      //     World.add(engine.current.world, [
      //       Bodies.circle(340, 340, 100, {
      //         density: 0.0005,
      //         frictionAir: 0.06,
      //         restitution: 0.3,
      //         friction: 0.01,
      //         render: {
      //           sprite: {
      //             texture: url, // set texture here
      //             xScale: 1,
      //             yScale: 1,
      //           },
      //         },
      //       }),
      //     ]);
      //   },
      //   () => {
      //     console.log('Error  Loading ');
      //   }
      // );

      // run the renderer
      Render.run(render);

      // create runner
      var runner = Runner.create();

      // run the engine
      Runner.run(runner, engine.current);
    }
  }, []);
  function addSlogan(two: any) {
    var defaultStyles = {
      size: two.width * 0.08,
      weight: 400,
      fill: 'white',
      leading: two.width * 0.08 * 0.8,
      family: 'Angus, Arial, sans-serif',
      alignment: 'center',
      baseline: 'baseline',
      margin: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    };
    var x = defaultStyles.margin.left;
    var y = -two.height; // Header offset

    for (var i = 0; i < 1; i++) {
      var word = 'hello';
      var group = new Two.Group();
      var text = new Two.Text('', 0, 0, defaultStyles);

      // group.isWord = true;

      // Override default styles
      text.value = word;

      var rect = text.getBoundingClientRect();
      var ox = x + rect.width / 2;
      var oy = y + rect.height / 2;

      var ca = x + rect.width;
      var cb = two.width;

      // New line
      if (ca >= cb) {
        x = defaultStyles.margin.left;
        y +=
          defaultStyles.leading +
          defaultStyles.margin.top +
          defaultStyles.margin.bottom;

        ox = x + rect.width / 2;
        oy = y + rect.height / 2;
      }

      group.translation.x = ox;
      group.translation.y = oy;
      text.translation.y = 14;

      var rectangle = new Two.Rectangle(0, 0, rect.width, rect.height);
      // rectangle.fill = 'rgb(255, 50, 50)';
      rectangle.fill =
        'rgba(' +
        255 +
        ',' +
        Math.floor(Math.random() * 255) +
        ',' +
        Math.floor(Math.random() * 255) +
        ',' +
        0.85 +
        ')';
      rectangle.noStroke();
      // rectangle.opacity = 0.75;
      rectangle.visible = true;

      var entity = Matter.Bodies.rectangle(ox, oy, 1, 1);
      Matter.Body.scale(entity, rect.width, rect.height);

      // Matter.Bodies.sc = new Two.Vector(rect.width, rect.height);
      // entity.object = group;
      // entities.push(entity);

      x += rect.width + defaultStyles.margin.left + defaultStyles.margin.right;

      // group.text = text;
      // group.rectangle = rectangle;
      // group.entity = entity;

      group.add(rectangle, text);
      two.add(group);
    }

    //  Matter.World.add(solver.world, entities);
  }

  return <div ref={element}>Hello world</div>;
};

export default ContactMe;
