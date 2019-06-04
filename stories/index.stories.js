import React from 'react'
import { storiesOf } from '@storybook/react'
import Selector from '../src/components/Selector'
import fakeData from '../src/assets/data/fakeData.json'

storiesOf('Button', module).add('test', () => (
  <Selector data={fakeData.fakeData}>Trigger</Selector>
))
