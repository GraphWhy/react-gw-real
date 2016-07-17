import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Header';


export default class Menu extends Component {
  render () {
    return (
      <Section primary='true'>
        <div className='center'>
        <br/>
          <Heading tag="h3" align="center" className='primaryTitle'>
            GraphWhy
          </Heading>
          <Heading tag="h1" align="center" className='secondaryTitle'>
            &nbsp;&nbsp;&nbsp;About Us
          </Heading>
          <br/><br/>
          <div className='aboutus'>
            <p>
                We are a tool for ‘statistical understanding’. Our main goal is to database people’s opinions and beliefs. Our dream is that one day society can have a public resource for understanding why the world is the way it is. We are working everyday to be that public resource.
            </p>
            <p className='response'>"Uhh, what does that mean?"</p>
            <p>
                We are a survey site. Our big innovation is that all gathered information goes into a public database for anyone to use.
            </p>
            <br/>
            <p>
                Here is a high level example:
            </p>
            <p>
                Lets say, A student writing a paper on why the national debt has grown to over $17 trillon dollars. The student has access to economic and political theories, but he wants to explore how U.S. citizens feel about the national debt. Using GraphWhy the student has a free statistical tool to provide the information he is looking for.
            </p>
            <p>
                If someone has done a survey on the national debt our student can use that information. Our student can even grow the dataset or develop his own survey.
            </p>
            <p>
                The take away is this, without GraphWhy.org the public can't access raw data from previous surveys. Currently, no company offers an open database to the public. Even if they did there is no guarentee that service will always be available. Because GraphWhy is a non-profit the software and database will always belong to the public.
            </p>
          </div>
        </div>
      </Section>
    );
  }
};
