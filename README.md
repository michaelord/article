---
title: Article
tags : ["all", "article", "wip"]
category: "Undefined"
logo: "./thumbnail.jpg"
icon: '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" fill="none"><rect width="260" height="180" fill="var(--color-bg)"></rect><rect x="30" y="48" width="186" height="8" fill="var(--color-contrast-low)"></rect><rect x="30" y="68" width="90" height="8" fill="var(--color-contrast-low)"></rect><rect x="30" y="88" width="90" height="8" fill="var(--color-contrast-low)"></rect><rect x="78" y="108" width="42" height="8" fill="var(--color-contrast-low)"></rect><rect x="30" y="108" width="42" height="8" fill="var(--color-primary)"></rect><rect x="30" y="128" width="90" height="8" fill="var(--color-contrast-low)"></rect><rect x="30" y="148" width="186" height="8" fill="var(--color-contrast-low)"></rect><rect x="30" y="24" width="144" height="12" fill="var(--color-contrast-high)"></rect><rect x="130" y="68" width="86" height="68" fill="var(--color-contrast-lower)"></rect><path d="M151 121L178 92.9998L195 121H151Z" fill="var(--color-contrast-medium)"></path><path d="M157 96C160.314 96 163 93.3137 163 90C163 86.6863 160.314 84 157 84C153.686 84 151 86.6863 151 90C151 93.3137 153.686 96 157 96Z" fill="var(--color-contrast-medium)"></path></svg>'
published : true
---
import {Playground, PlaygroudCode} from 'components/styleguide';
import {Figure} from 'components/media';
import {Blockquote} from 'components/editable';
import {BlockquoteData, FigureData} from 'components/editable/demo';
import {Placeholder} from 'components/libs';
import {Article} from './';
import {ArticleDemo as Demo} from './demo';

[TODO]

<Demo />

<Article>
    <Placeholder.P />
    <Blockquote {...BlockquoteData} pull="right" author={undefined} />
    <Placeholder.P />
    <Placeholder.P />
    <Placeholder.P />
    <Placeholder.P />
    <Blockquote {...BlockquoteData} />
    <Placeholder.P />
    <Figure {...FigureData} />
    <Placeholder.P />
</Article>
