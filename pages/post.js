import Author from '@/components/Author';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import ShareBar from '@/components/ShareBar';
import TagBar from '@/components/TagBar';
import React from 'react';

const Home = () => {
  return (
    <div>
      <main className='max-w-7xl flex m-auto flex-col px-6 pb-4 gap-4'>
        <Nav />
        <div className='m-auto flex items-center  flex-col gap-6 py-6 max-w-2xl'>
          <div className='text-2xl font-bold text-center'>
            <h1>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              consectetur adipiscing elit. adipiscing elit
            </h1>
          </div>

          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-2'>
              <img
                src='/favicon.ico'
                className='w-4'
              />
              <div className='text-sm'>Sagar Jaid</div>
            </div>
            {/* <img src="/clap-2.png" className="w-12" /> */}
            <div className='text-sm'>Friday, 12 June 2023</div>
            <div className='text-sm'>in digital marketing, tips & industry</div>
          </div>
          <img
            src='https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg'
            className='w-full rounded-md'
          />

          <div className='flex flex-col gap-3 text-justify'>
            <p>
              Now, whether your business has been a longtime user of social
              media platforms or not, one of the best ways to further amp up
              your social media strategy is to automate it. Using automated
              tools you can optimize the social interactions of your business.
              Automating your social media marketing will eliminate the
              challenges that come with managing multiple social media
              platforms, such as the hours spent on maintaining and building
              brand accounts, and makes the entire process a lot less
              overwhelming
            </p>
            <p>
              Now, whether your business has been a longtime user of social
              media platforms or not, one of the best ways to further amp up
              your social media strategy is to automate it. Using automated
              tools you can optimize the social interactions of your business.
              Automating your social media marketing will eliminate the
              challenges that come with managing multiple social media
              platforms, such as the hours spent on maintaining and building
              brand accounts, and makes the entire process a lot less
              overwhelming.
            </p>
            <p>
              In this article, we’ll explore how to use tools for social media
              automation, how popular AI tools like ChatGPT and text-to-video
              can supercharge your social media marketing as well as common do’s
              and don’ts of social media automation. Benefits of Social Media
              Automation
            </p>
            <h2>Time Efficiency</h2>
            <p>
              One of the key benefits of social media automation is the ability
              to save time and optimize efficiency. Automation tools allow you
              to schedule and publish social media posts in advance which
              lessens the time taken up by manual posting.
            </p>
            <p>
              Now, whether your business has been a longtime user of social
              media platforms or not, one of the best ways to further amp up
              your social media strategy is to automate it. Using automated
              tools you can optimize the social interactions of your business.
              Automating your social Now, whether your business has been a
              longtime user of social media platforms or not, one of the best
              ways to further amp up your social media strategy is to automate
              it.
            </p>
          </div>
          <TagBar />

          <ShareBar />


          <Author />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
