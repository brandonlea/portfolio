import Head from 'next/head'

import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { SimpleLayout } from '../components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Brandon-Lea Price</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="Acer Nitro 5 Laptop">
              CPU: 11th Gen Intel(R) Core(TM) i7-11800H Ram: 16GB DDR 4 GPU: RTX
              3060
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              I love using Visual Studio Code when I am doing front end website
              development like HTML, CSS, JS.
            </Tool>
            <Tool title="PHPStorm">
              I love using PHPStorm when I'm working with PHP projects like
              Laravel or core PHP it makes it so much easier and efficient.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
