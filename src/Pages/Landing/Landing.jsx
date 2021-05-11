import React from 'react';
import Single from './Single';
import { Economy } from '../Economy/Economy';
import { Corona } from '../Coronavirus/Corona';
import styles from './Landing.module.css';
import { Features } from '../Features/Features';
import { Opinion } from '../Opinion/Opinion';
import TopContent from './TopContent';
import { EconomyWithoutFooter } from '../Economy/EconomyWithoutFooter';
import { OpinionWithoutFooter } from '../Opinion/OpinionWithoutFooter';
import { FeaturesWithoutFooter } from '../Features/FeaturesWithoutFooter';
const Landing = () => {
  return (
    <div className={styles.main}>
      <TopContent />
      {/* <h1>General News</h1>
      {
        <Single
          title='Rafael Nadal Pulls Out Of U.S. Open Over COVID-19 Concerns'
          description="Rafael Nadal is officially OUT of the U.S. Open ... the tennis legend said Tuesday it's just too damn unsafe for him to travel to America during the COVID-19 pandemic."
          image='https://imagez.tmz.com/image/fa/4by3/2020/08/04/fad55ee236fc4033ba324e941bb8c8b7_md.jpg'
          source='TMZ.com'
        />
      } */}
      {/* <Single
        title='This may be the big winner of the market crash'
        description='This may be the big winner of the market crash.'
        image='https://cdn.cnn.com/cnnnext/dam/assets/150325082152-social-gfx-cnn-logo-super-169.jpg'
        source='CNN'
      /> */}

      <h1 style = {{textAlign: "center"}}>General News</h1>
      <EconomyWithoutFooter />
      <Single
        title='2022 Kia EV6 Teased, Will Become The Brand’s First Dedicated EV - CarScoops'
        description='The EV6 could have up to 302 hp.'
        image='https://www.carscoops.com/wp-content/uploads/2021/03/2022-Kia-ES6.jpg'
        source='IMDB'
      />
      <h1 style = {{textAlign: "center"}}>Entertainment News</h1>
      <OpinionWithoutFooter />
      <Single
        title='Bitcoin Suddenly Soars Toward $60,000 Price—Roaring Past $1 Trillion As Fear Grips Tech Stocks",'
        description='The bitcoin price added almost 10% over the last 24 hours, taking it within touching distance of its all-time highs...'
        image='https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F602fddbc99a798c04f9de3b0%2F0x0.jpg'
        source='TOI'
      />
      <h1 style = {{textAlign: "center"}}>Technology News</h1>
      <FeaturesWithoutFooter />
      <Single
        title='How to Tell If You are Being Tracked by Apple AirTags'
        description='AirTags aren’t a thing yet—at least, not when we wrote this—but the oft-rumored tracking devices, about the size of a coin, should debut soon. And when they do, Apple is already building security features into iOS 14.5 to prevent people from secretly tracking…'
        image='https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/tvdl0j37zjg0vj9cnrvp.jpg'
        source='IND'
      />

      <h1 style = {{textAlign: "center"}}>Coronavirus related news</h1>
      <Corona />
    </div>
  );
};

export default Landing;
