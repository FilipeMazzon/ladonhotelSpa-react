import React from 'react';

const Index = () => {
    return (
        <div className="scene" id="events">
            <article className="event fullheight" id="businessmeetings">
                <div className="content">
                    <h2>Business Meetings</h2>
                    <p>Our hotel boasts wireless Internet in every common room, and guest room, including the dining
                        area and lobby. And, we have a state-of-the-art meeting room with video projectors, high
                        definition video screens, and advanced sound technology.</p>
                </div>
                {/*  content */}
            </article>
            {/*  article */}
            <article className="event fullheight" id="weddings">
                <div className="content">
                    <h2>Weddings &amp; Social Events</h2>
                    <p> When you entrust us to handle your wedding, or other event, you’re putting your faith in our
                        professional reputation – and that’s not a responsibility we take lightly. </p>
                </div>
                {/* content*/}
            </article>
            {/* article */}
        </div>
    )
};
export default Index;
