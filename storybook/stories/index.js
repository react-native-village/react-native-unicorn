// @flow
import React from 'react'
import { storiesOf } from '@storybook/react-native'
//import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import {
  Avatar,
  Button,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H7,
  CardResume,
  CardCareer,
  CardInfo,
  CardAbout,
  CardContacts,
  CardVacancies,
  Plus,
  Developer,
  Dollar,
  Cost,
  ProfileInfo,
  Line,
  Background,
  Space,
  SocialIcons,
  ButtonDeveloperSub,
  ButtonStatusIssue,
  ButtonMarkDecision,
  IconCircle,
  Comments,
  Star,
  Input,
  InputBig,
  CardIssue,
  CardIssueResponce,
  CardIssueResponceSub,
  TabCompany,
  TabDeveloper,
  Tabs
} from './components'
import CenterView from './CenterView'
import Welcome from './Welcome'
import {
  cardinfo,
  cardabout,
  cardcontacts,
  cardvacancies,
  cardcareer,
  cardresume,
  cardissue,
  cardissueresponce,
  cardissueresponcesub
} from './data'
import { BLUE, PINK } from './components/constants'
import { search } from './components/Form'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Avatar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('large', () => (
    <Avatar uri="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg" size="large" />
  ))
  .add('medium', () => (
    <Avatar uri="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg" size="medium" />
  ))
  .add('small', () => (
    <Avatar uri="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg" size="small" />
  ))

storiesOf('Text', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('H1', () => <H1 title="H1" />)
  .add('H2', () => <H2 title="H2" />)
  .add('H3', () => <H3 title="H3" />)
  .add('H4', () => <H4 title="H4" />)
  .add('H5', () => <H5 title="H5" />)
  .add('H6', () => <H6 title="H6" />)
  .add('H7', () => <H7 title="H7" />)

storiesOf('Buttons', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Button', () => (
    <>
      <Button title="Done" textStyle={{ fontSize: 30 }} />
      <Space height={10} />
      <Button title="Cancel" textStyle={{ fontSize: 30 }} color={PINK} />
    </>
  ))
  .add('ButtonMarkDecision', () => <ButtonMarkDecision />)
  .add('Comments', () => <Comments title={3} />)
  .add('IconCircle', () => (
    <>
      <IconCircle name=":thought_balloon:" />
      <Space height={10} />
      <IconCircle name=":telephone_receiver:" />
      <Space height={10} />
      <IconCircle name=":loud_sound:" />
      <Space height={10} />
      <IconCircle name=":thought_balloon:" />
    </>
  ))
  .add('ButtonDeveloperSub', () => <ButtonDeveloperSub title="Ivan Ivanov" color={BLUE} />)
  .add('ButtonStatusIssue', () => (
    <>
      <ButtonStatusIssue title={`Closed ${34}`} color={BLUE} />
      <Space height={20} />
      <ButtonStatusIssue title={`Open ${34}`} color={PINK} />
    </>
  ))
  .add('Star', () => (
    <>
      <Star />
      <Space height={20} />
      <Star star />
    </>
  ))
  .add('SocialIcons', () => <SocialIcons />)

storiesOf('Cards', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('CardResume', () => <CardResume obj={cardresume} obj2={cardinfo} />)
  .add('CardCareer', () => <CardCareer obj={cardcareer} />)
  .add('CardContacts', () => <CardContacts obj={cardcontacts} />)
  .add('CardVacancies', () => <CardVacancies obj={cardvacancies} />)
  .add('CardAbout', () => <CardAbout title={cardabout} />)
  .add('CardInfo', () => <CardInfo obj={cardinfo} />)
  .add('CardIssue', () => <CardIssue obj={cardissue} />)
  .add('CardIssueResponce', () => <CardIssueResponce obj={cardissueresponce} />)
  .add('CardIssueResponceSub', () => <CardIssueResponceSub obj={cardissueresponcesub} />)

storiesOf('Inputs', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Input', () => <Input type={search} />)
  .add('InputBig', () => <InputBig />)

storiesOf('Tabs', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('TabCompany', () => <TabCompany />)
    .add('TabDeveloper', () => <TabDeveloper />)
    .add('Tabs', () => <Tabs />)

storiesOf('Items', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('Plus', () => <Plus />)
    .add('Developer', () => <Developer title="Reactnative Dmitriy" />)
    .add('Dollar', () => <Dollar />)
    .add('Cost', () => <Cost title={5000} />)
    .add('ProfileInfo', () => <ProfileInfo location="Russia, Moscow" age={39} />)
    .add('Line', () => <Line />)
    .add('Background', () => <Background />)
