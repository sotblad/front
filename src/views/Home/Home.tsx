import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Button, AddIcon, LogoRoundIcon, Image } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import ListedOn from './components/ListedOn'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  text-align: center;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'Koala DeFi Finance')}
        </Heading>
        <Text>{TranslateString(578, 'High yields BSC farm brought by the Koalas.')}</Text>
        <hr />
        <a href="https://swap.koaladefi.finance/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xba26397cdff25f0d26e815d218ef3c77609ae7f1">
          <Button variant="subtle">
            BUY <img src="/images/farms/lyptus.png" alt="LYPTUS Token" width="70" height="70" /> LYPTUS Token Now!
          </Button>
        </a>
      </Hero>
      <div>
        <p>
          <a href="https://twitter.com/KoalaDefi/status/1365255264484659201" target="_blank" rel="noreferrer">
            <Image src="/images/koala/airdrop-website-01.png" alt="Airdrop" width={1934} height={376} responsive />
          </a>
        </p>
      </div>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
          <TotalValueLockedCard />
          <ListedOn />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
