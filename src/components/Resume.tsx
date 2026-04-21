import { Avatar, Checkbox, Fieldset, ProgressBar, Tab, Tabs } from '@react95/core';

function Resume() {
  return (
    <Tabs defaultActiveTab="Profile">
      <Tab title="Profile">
        <h3>Hello, I am Yashkumar Nimje</h3>
        <Avatar src="https://avatars.githubusercontent.com/u/87601568?v=4" size="140px" />

        <p>Full Stack Developer • Building scalable & user-focused web apps</p>

        <Fieldset legend="About Me">
          <p>
            I’m a full stack developer focused on building fast, scalable, and user-focused applications. 
            I mainly work with the MERN stack and enjoy turning ideas into real, usable products.
            
            I also have an interest in game development, where I experiment with interactive systems 
            and creative problem-solving beyond traditional web apps.
            
            My background in competitive programming helps me write efficient, optimized code. 
            I care about performance, clean design, and building things that actually solve problems.
            
            Currently exploring system design, backend architecture, and real-time applications.
          </p>
        </Fieldset>
      </Tab>

      <Tab title="Projects">
        <Fieldset legend="SkillCraft (2026)">
          <Checkbox readOnly checked>
            Developed a full-stack skill exchange platform using MongoDB, Express, React, Node.js, and Socket.io
          </Checkbox>
          <Checkbox readOnly checked>
            Implemented authentication, user profiles, matching system, and real-time chat functionality
          </Checkbox>
          <Checkbox readOnly checked>
            Designed a responsive and intuitive user interface with Tailwind CSS
          </Checkbox>
        </Fieldset>

        <Fieldset legend="AssetCrate (2025)">
          <Checkbox readOnly checked>
            Built a platform for discovering and sharing game assets using Next.js and MongoDB
          </Checkbox>
          <Checkbox readOnly checked>
            Implemented asset upload, search, categorization, and authentication features
          </Checkbox>
          <Checkbox readOnly checked>
            Focused on performance and usability to improve developer workflow
          </Checkbox>
        </Fieldset>
      </Tab>

      <Tab title="Skills">
        <Fieldset legend="Programming">
          <li>JavaScript</li>
          <ProgressBar percent={90} width="200px" />
          <li>TypeScript</li>
          <ProgressBar percent={85} width="200px" />
          <li>Python</li>
          <ProgressBar percent={75} width="200px" />
        </Fieldset>

        <Fieldset legend="Frameworks & Tools">
          <li>React</li>
          <ProgressBar percent={90} width="200px" />
          <li>Next.js</li>
          <ProgressBar percent={85} width="200px" />
          <li>Node.js</li>
          <ProgressBar percent={80} width="200px" />
          <li>MongoDB</li>
          <ProgressBar percent={80} width="200px" />
          <li>Tailwind CSS</li>
          <ProgressBar percent={85} width="200px" />
        </Fieldset>

        <Fieldset legend="Other">
          <li>Git & GitHub</li>
          <ProgressBar percent={90} width="200px" />
        </Fieldset>
      </Tab>

      <Tab title="Education">
        <Fieldset legend="Bachelor of Technology (Data Science)">
          <p>Newton School of Technology, Rishihood University (2024–2028)</p>
          <p>CGPA: 8.47</p>
        </Fieldset>
      </Tab>
    </Tabs>
  );
}

export default Resume;