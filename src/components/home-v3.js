import React, {useEffect} from 'react';
import { Navbar } from './global-components/navbar';
import { BannerV2 } from './section-components/banner-v2';
import { IntroV2 } from './section-components/intro-v2';
import { Video } from './section-components/video';
import { Counter } from './section-components/counter';
import { Footer_v1 } from './global-components/footer';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

export const Home_V3 = () => {

    
	useEffect(() => {
        addResponseMessage("Welcome to this awesome chat!");
    }, [])

     const handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        addResponseMessage("Message received!");
        // Now send the message throught the backend API
      }
	  
    return <div>
        <Navbar />
        <BannerV2 />
        <IntroV2 />
        <Video />
        <Counter />
		 <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="Envirify"
          subtitle="Chat"
        />
        <Footer_v1 />
    </div>
}


