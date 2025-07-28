"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Globe,
  Heart,
  Code,
  Database,
  Cloud,
  Zap,
  Terminal,
  GitBranch,
  Monitor,
} from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    // Slide 1: Title
    {
      id: "title",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-8 bg-gradient-to-br from-gray-900 to-black text-green-400 rounded-lg p-8">
          <div className="space-y-4">
            <div className="font-mono text-sm text-green-500 mb-4">{"> initializing presentation..."}</div>
            <h1 className="text-6xl font-bold font-mono bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Full Stack Development
            </h1>
            <div className="font-mono text-2xl text-cyan-400">{"class Internship extends Experience {"}</div>
            <h2 className="text-3xl font-semibold text-gray-300 font-mono">United Techlabs</h2>
            <p className="text-xl text-gray-400 font-mono">May 2024 - July 2024</p>
            <div className="font-mono text-2xl text-cyan-400">{"}"}</div>
          </div>
          <div className="flex items-center space-x-6 text-lg">
            <Terminal className="w-8 h-8 text-green-400" />
            <Code className="w-8 h-8 text-cyan-400" />
            <Database className="w-8 h-8 text-yellow-400" />
            <Cloud className="w-8 h-8 text-purple-400" />
          </div>
          <div className="font-mono text-green-400 text-sm">
            {/* A transformative journey from avoiding code to building full-stack applications */}
            &quot;A transformative journey from avoiding code to building full-stack applications&quot;
          </div>
        </div>
      ),
    },

    // Slide 2: The Beginning
    {
      id: "beginning",
      content: (
        <div className="space-y-8 bg-gray-900 text-green-400 rounded-lg p-8">
          <div className="font-mono text-sm text-green-500 mb-4">{"> git log --oneline --reverse"}</div>
          <h1 className="text-5xl font-bold text-center mb-12 font-mono text-cyan-400">The Beginning 🌱</h1>
          <div className="flex justify-center">
            <div className="space-y-6">
              <div className="bg-red-900/30 border-l-4 border-red-400 p-6 rounded-r-lg font-mono">
                <h3 className="text-xl font-semibold text-red-400 mb-2 flex items-center">
                  <Terminal className="w-5 h-5 mr-2" />
                  Before Internship
                </h3>
                <div className="space-y-2 text-red-300">
                  <div>{"❌ if (code.detected) { changePath(); }"}</div>
                  <div>{"❌ const vsCode = null; // not installed"}</div>
                  <div>{"❌ let frontendKnowledge = 0;"}</div>
                  <div>{"❌ let backendKnowledge = 0;"}</div>
                  <div>{'❌ focus = "DataScience"; // only'}</div>
                  <div>{"❌ curiosity.killed(); // by dismissive comments"}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center font-mono text-green-400">{/* Ready to git commit to change... */}&quot;Ready to git commit to change...&quot;</div>
        </div>
      ),
    },

    // Slide 3: Technical Journey
    {
      id: "technical-journey",
      content: (
        <div className="space-y-8 bg-gray-900 text-green-400 rounded-lg p-8">
          <div className="font-mono text-sm text-green-500 mb-4">{"> npm run build:skills"}</div>
          <h1 className="text-5xl font-bold text-center mb-12 font-mono text-cyan-400">Technical Stack 🚀</h1>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-blue-900/30 border-blue-400 border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center font-mono">
                  <Monitor className="w-6 h-6 mr-2" />
                  Frontend
                </h3>
                <div className="space-y-2 text-blue-300 font-mono text-sm">
                  <div>{"├── HTML & CSS"}</div>
                  <div>{"├── JavaScript"}</div>
                  <div>{"├── Next.js Components"}</div>
                  <div>{"├── Figma Design"}</div>
                  <div>{"├── ShadCN Components"}</div>
                  <div>{"├── Responsive Design"}</div>
                  <div>{"├── Mobile Debugging"}</div>
                  <div>{"└── Performance Optimization"}</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-900/30 border-green-400 border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center font-mono">
                  <Database className="w-6 h-6 mr-2" />
                  Backend
                </h3>
                <div className="space-y-2 text-green-300 font-mono text-sm">
                  <div>{"├── Golang"}</div>
                  <div>{"├── REST APIs"}</div>
                  <div>{"├── NoSQL (MongoDB)"}</div>
                  <div>{"├── Authentication"}</div>
                  <div>{"├── Rate Limiting"}</div>
                  <div>{"└── API Integration"}</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/30 border-purple-400 border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center font-mono">
                  <Cloud className="w-6 h-6 mr-2" />
                  DevOps & Cloud
                </h3>
                <div className="space-y-2 text-purple-300 font-mono text-sm">
                  <div>{"├── AWS Lambda"}</div>
                  <div>{"├── S3 Bucket"}</div>
                  <div>{"├── DynamoDB"}</div>
                  <div>{"├── CI/CD Pipeline"}</div>
                  <div>{"├── Vercel Deployment"}</div>
                  <div>{"└── CloudFlare"}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },

    // Slide 4: Weekly Progress
    {
      id: "weekly-progress",
      content: (
        <div className="space-y-6 bg-gray-900 text-green-400 rounded-lg p-8">
          <div className="font-mono text-sm text-green-500 mb-4">
            {'> git log --graph --pretty=format:"%h %s" --abbrev-commit'}
          </div>
          <h1 className="text-4xl font-bold text-center mb-8 font-mono text-cyan-400">9-Week Git History 📅</h1>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {[
              {
                week: "Week 1",
                focus: "Onboarding & Git",
                skills: "Outlook, Slack, GitHub, Basic JS/HTML",
                commit: "a1b2c3d",
              },
              {
                week: "Week 2",
                focus: "Design & Architecture",
                skills: "Figma, REST APIs, System Architecture",
                commit: "d4e5f6g",
              },
              {
                week: "Week 3",
                focus: "Databases & Web Fundamentals",
                skills: "NoSQL, MongoDB, API Pagination",
                commit: "h7i8j9k",
              },
              {
                week: "Week 4",
                focus: "Cloud & Backend",
                skills: "AWS Lambda, S3, DynamoDB, CSS, CI/CD",
                commit: "l0m1n2o",
              },
              {
                week: "Week 5",
                focus: "Authentication",
                skills: "Hashing, OAuth, OTP Services, Tokens",
                commit: "p3q4r5s",
              },
              {
                week: "Week 6",
                focus: "Frontend Mastery",
                skills: "Next.js, Cookies, Pull Requests, ShadCN",
                commit: "t6u7v8w",
              },
              {
                week: "Week 7",
                focus: "Golang & Performance",
                skills: "Go Programming, URL Handling, Mobile Debugging, Performance Tab Optimization",
                commit: "x9y0z1a",
              },
              {
                week: "Week 8",
                focus: "Integration & AI",
                skills: "Full-stack Integration, RAG, LLM, Deployment",
                commit: "b2c3d4e",
              },
              {
                week: "Week 9",
                focus: "Testing & Documentation",
                skills: "Unit Testing (80% Coverage), Swagger API Documentation, Technical Documentation",
                commit: "f5g6h7i",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700 font-mono"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-black font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-1">
                    <GitBranch className="w-4 h-4 inline mr-1" />
                    {item.commit} - {item.week}
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400">{item.focus}</h3>
                  <p className="text-green-300 text-sm">{/* {item.skills} */}{item.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    // Slide 5: Project Showcase
    {
      id: "project",
      content: (
        <div className="space-y-8 bg-gray-900 text-green-400 rounded-lg p-8">
          <div className="font-mono text-sm text-green-500 mb-4">
            {"> docker run --name godai-wellness -p 3000:3000 production"}
          </div>
          <h1 className="text-5xl font-bold text-center mb-12 font-mono text-cyan-400">Project: Godai Wellness 💛</h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-8 rounded-xl border border-purple-400">
                <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center font-mono">
                  <Heart className="w-8 h-8 mr-3 text-pink-400" />
                  Mental Wellness Platform
                </h3>
                <div className="text-purple-300 text-lg leading-relaxed font-mono">
                  <div>{"const godai = {"}</div>
                  <div className="ml-4">{'purpose: "tackle real-world mental wellness",'}</div>
                  <div className="ml-4">{'ai: "Vaira - personal therapy buddy",'}</div>
                  <div className="ml-4">{'impact: "help people when needed most"'}</div>
                  <div>{"};"}</div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-mono">
                  <Globe className="w-4 h-4" />
                  <span>godaiwellness.com</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400 font-mono">Tech Stack Implementation</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-400">
                  <h4 className="font-semibold text-blue-400 font-mono">Frontend</h4>
                  <p className="text-blue-300 text-sm font-mono">Next.js, React, Tailwind</p>
                </div>
                <div className="bg-green-900/30 p-4 rounded-lg border border-green-400">
                  <h4 className="font-semibold text-green-400 font-mono">Backend</h4>
                  <p className="text-green-300 text-sm font-mono">Golang, REST APIs</p>
                </div>
                <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-400">
                  <h4 className="font-semibold text-yellow-400 font-mono">Database</h4>
                  <p className="text-yellow-300 text-sm font-mono">MongoDB, DynamoDB</p>
                </div>
                <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-400">
                  <h4 className="font-semibold text-purple-400 font-mono">Deployment</h4>
                  <p className="text-purple-300 text-sm font-mono">AWS, Vercel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 6: Key Outcomes
    {
      id: "outcomes",
      content: (
        <div className="space-y-8 bg-gray-900 text-green-400 rounded-lg p-8">
          <div className="font-mono text-sm text-green-500 mb-4">
            {"> npm run test:achievements && npm run build:growth"}
          </div>
          <h1 className="text-5xl font-bold text-center mb-12 font-mono text-cyan-400">Key Outcomes 🎯</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="bg-green-900/30 border-green-400 border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-4 font-mono">Technical Achievements</h3>
                  <div className="space-y-3 text-green-300 font-mono text-sm">
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 mr-2 mt-0.5 text-green-400" />
                      {'✅ fullStackApp.build("from scratch");'}
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 mr-2 mt-0.5 text-green-400" />
                      {"✅ modernStack.master();"}
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 mr-2 mt-0.5 text-green-400" />
                      {"✅ deploy(AWS, Vercel);"}
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 mr-2 mt-0.5 text-green-400" />
                      {"✅ integrate(AI, ML);"}
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 mr-2 mt-0.5 text-green-400" />
                      {"✅ optimize.performance();"}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-blue-900/30 border-blue-400 border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-400 mb-4 font-mono">Personal Growth</h3>
                  <div className="space-y-3 text-blue-300 font-mono text-sm">
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 mr-2 mt-0.5 text-blue-400" />
                      {"🔄 transform(codeAvoider, developer);"}
                    </div>
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 mr-2 mt-0.5 text-blue-400" />
                      {"🔄 curiosity.restore();"}
                    </div>
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 mr-2 mt-0.5 text-blue-400" />
                      {"🔄 mindset.setProblemSolving(true);"}
                    </div>
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 mr-2 mt-0.5 text-blue-400" />
                      {'🔄 passion.find("development");'}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 7: Challenges & Mistakes
    {
      id: "challenges",
      content: (
        <div className="space-y-8 bg-gray-900 text-green-400 rounded-lg p-8">
          <div className="font-mono text-sm text-green-500 mb-4">
            {'> git log --grep="fix" --grep="debug" --oneline'}
          </div>
          <h1 className="text-5xl font-bold text-center mb-12 font-mono text-cyan-400">Debugging Life 🐛</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-red-900/30 border-red-400 border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4 font-mono">
                  try {"{ challenges }"} catch(e) {"{"}
                </h3>
                <div className="space-y-3 text-red-300 font-mono text-sm">
                  <div>{"❌ throw new ImposterSyndromeError();"}</div>
                  <div>{"❌ SyntaxError: Unexpected token"}</div>
                  <div>{"❌ git merge conflict detected"}</div>
                  <div>{"❌ API integration failed"}</div>
                  <div>{"❌ deployment.env.missing()"}</div>
                  <div>{"❌ performance.bottleneck.found()"}</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-900/30 border-yellow-400 border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-4 font-mono">{"} finally { lessons }"}</h3>
                <div className="space-y-3 text-yellow-300 font-mono text-sm">
                  <div>{"✅ RTFM(); // Read The F***ing Manual"}</div>
                  <div>{"✅ test.early() && test.often();"}</div>
                  <div>{'✅ askQuestions("no question too small");'}</div>
                  <div>{'✅ git.commit("frequently", "meaningful");'}</div>
                  <div>{"✅ practice > theory;"}</div>
                  <div>{"✅ monitor.performance.always();"}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-xl border border-purple-400">
            <h3 className="text-lg font-semibold text-purple-400 mb-2 font-mono">Most Valuable Lesson</h3>
            <div className="text-purple-300 text-lg font-mono">
              <div>{"const wisdom = {"}</div>
              <div className="ml-4">{'failure: "not opposite of success",'}</div>
              <div className="ml-4">{'reality: "failure is part of success",'}</div>
              <div className="ml-4">{'growth: "every bug fixed makes better dev"'}</div>
              <div>{"};"}</div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 8: Mentors & Team
    {
      id: "mentors",
      content: (
        <div className="space-y-8 bg-gray-900 text-green-400 rounded-lg p-8">
          <div className="font-mono text-sm text-green-500 mb-4">
            {'> git log --pretty=format:"%an contributed to my growth"'}
          </div>
          <h1 className="text-5xl font-bold text-center mb-12 font-mono text-cyan-400">Contributors 🙏</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-blue-900/30 border-blue-400 border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4 font-mono">Kuldeep Jangir</h3>
                <p className="text-blue-300 mb-4 font-mono">
                  <strong>{/* Technical Mentor & Guide */}&quot;Technical Mentor & Guide&quot;</strong>
                </p>
                <div className="text-blue-300 font-mono text-sm">
                  <div>{"const mentor = {"}</div>
                  <div className="ml-4">{'belief: "truly believed in me",'}</div>
                  <div className="ml-4">{'method: "learning by doing, building, failing",'}</div>
                  <div className="ml-4">{'impact: "revived curiosity",'}</div>
                  <div className="ml-4">{'result: "made coding my safe space"'}</div>
                  <div>{"};"}</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-pink-900/30 border-pink-400 border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-pink-400 mb-4 font-mono">Manaswi Sood</h3>
                <p className="text-pink-300 mb-4 font-mono">
                  <strong>{/* Leadership & Inspiration */}&quot;Leadership & Inspiration&quot;</strong>
                </p>
                <div className="text-pink-300 font-mono text-sm">
                  <div>{"const leader = {"}</div>
                  <div className="ml-4">{'inspiration: "true power of women",'}</div>
                  <div className="ml-4">{'style: "leads by example",'}</div>
                  <div className="ml-4">{'qualities: ["strength", "kindness", "clarity"],'}</div>
                  <div className="ml-4">{'frequency: "every single day"'}</div>
                  <div>{"};"}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-green-900/30 border-green-400 border">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4 font-mono">Support System</h3>
              <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
                <div>
                  <h4 className="font-semibold text-green-300 mb-2">{/* Colleagues at United Techlabs */}&quot;Colleagues at United Techlabs&quot;</h4>
                  <p className="text-green-400">team_members && colleagues;</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-300 mb-2">{/* Friends & Support Pillars */}&quot;Friends & Support Pillars&quot;</h4>
                  <div className="text-green-400">college_friends.forEach(friend =&gt; support++);</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },

    // Slide 9: Future Goals
    {
      id: "future",
      content: (
        <div className="space-y-8 bg-gray-900 text-green-400 rounded-lg p-8">
          <div className="font-mono text-sm text-green-500 mb-4">{'> cat roadmap.md | grep -E "TODO|FUTURE"'}</div>
          <h1 className="text-5xl font-bold text-center mb-12 font-mono text-cyan-400">Future Roadmap 🛣️</h1>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card className="bg-purple-900/30 border-purple-400 border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-purple-400 mb-4 font-mono">Technical Goals</h3>
                  <div className="space-y-2 text-purple-300 font-mono text-sm">
                    <div>{"TODO: master(advancedBackend);"}</div>
                    <div>{"TODO: explore(microservices, containers);"}</div>
                    <div>{"TODO: deepen(AI, ML);"}</div>
                    <div>{"TODO: contribute(openSource);"}</div>
                    <div>{"TODO: build(scalableProduction);"}</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-orange-900/30 border-orange-400 border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-400 mb-4 font-mono">Personal Vision</h3>
                  <div className="space-y-2 text-orange-300 font-mono text-sm">
                    <div>{"FUTURE: buildImpactfulSolutions();"}</div>
                    <div>{"FUTURE: mentorOthers(codingJourney);"}</div>
                    <div>{"FUTURE: curiosity.neverStop();"}</div>
                    <div>{"FUTURE: bridge(tech, humanity);"}</div>
                    <div>{"FUTURE: createProducts(helpPeople);"}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl border border-cyan-400 text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-4 font-mono">
              {"while (roadAhead.isLong()) { curiosity.drive(); }"}
            </div>
            <div className="text-lg text-gray-300 font-mono">
              {/* From changePath(avoidCode) to findComfort(development) */}&quot;From changePath(avoidCode) to findComfort(development)&quot;
            </div>
            <div className="text-lg text-gray-300 font-mono">{/* This internship has been truly transformative */}&quot;This internship has been truly transformative&quot;</div>
          </div>
        </div>
      ),
    },

    // Slide 10: Thank You
    {
      id: "thank-you",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-8 bg-gradient-to-br from-gray-900 to-black text-green-400 rounded-lg p-8">
          <div className="font-mono text-sm text-green-500 mb-4">
            {'> shutdown -h now "Thank you for this incredible journey"'}
          </div>
          <h1 className="text-6xl font-bold font-mono bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Thank You! 🙏
          </h1>

          <div className="space-y-4 font-mono">
            <div className="text-cyan-400">{"const internship = {"}</div>
            <div className="ml-4 text-gray-300">{'company: "United Techlabs",'}</div>
            <div className="ml-4 text-gray-300">{'duration: "May 2024 - July 2024",'}</div>
            <div className="ml-4 text-gray-300">{'type: "transformation, learning, growth"'}</div>
            <div className="text-cyan-400">{"};"}</div>
          </div>

          <div className="flex items-center space-x-6 text-lg">
            <Button
              variant="outline"
              className="flex items-center space-x-2 bg-gray-800 border-green-400 text-green-400 font-mono hover:bg-green-400 hover:text-black"
            >
              <Globe className="w-5 h-5" />
              <span>godaiwellness.com</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center space-x-2 bg-gray-800 border-pink-400 text-pink-400 font-mono hover:bg-pink-400 hover:text-black"
            >
              <Heart className="w-5 h-5" />
              <span>Meet Vaira</span>
            </Button>
          </div>

          <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 p-6 rounded-xl border border-yellow-400 max-w-2xl font-mono">
            <div className="text-lg text-yellow-400">
              {'// "Nothing beats seeing your own design and code go live"'}
            </div>
            <div className="text-yellow-300 mt-2">{'console.log("Go check out Godai Wellness, meet Vaira!");'}</div>
          </div>

          <div className="font-mono text-green-400 text-sm">
            {"> exit 0 // Journey complete, but the code continues..."}
          </div>
        </div>
      ),
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header */}
      <div className="bg-gray-900 shadow-sm border-b border-green-400 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-green-400 font-mono">
            {'> ./presentation --title="United Techlabs Internship"'}
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400 font-mono">
              [{currentSlide + 1}/{slides.length}]
            </span>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="bg-gray-800 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="bg-gray-800 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="min-h-[600px] p-8">{slides[currentSlide].content}</div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 pb-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors font-mono ${
              index === currentSlide ? "bg-green-400" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
