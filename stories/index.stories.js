import React from 'react'
import { storiesOf } from '@storybook/react'
import Selector from '../src'
import { data } from './fakeData.json'

storiesOf('Selector', module).add('Example', () => (
  <Selector data={data}>Trigger</Selector>
))
