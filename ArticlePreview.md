---
title: Article Preview
tags : ["all", "article", "wip"]
category: "Undefined"
logo: "./thumbnail.jpg"
icon: '<svg viewBox="0 0 260 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M70 16H190V94H70V16Z" fill="var(--color-contrast-lower)"></path><path d="M110.364 46.7273C114.43 46.7273 117.727 43.4305 117.727 39.3636C117.727 35.2968 114.43 32 110.364 32C106.297 32 103 35.2968 103 39.3636C103 43.4305 106.297 46.7273 110.364 46.7273Z" fill="var(--color-contrast-medium)"></path><path d="M103 77.409L136.136 43.0454L157 77.409H103Z" fill="var(--color-contrast-medium)"></path><rect x="70" y="102" width="23" height="6" fill="var(--color-primary)"></rect><rect x="70" y="115" width="120" height="9" fill="var(--color-contrast-high)"></rect><rect x="70" y="131" width="78" height="9" fill="var(--color-contrast-high)"></rect><circle cx="80" cy="158" r="10" fill="var(--color-contrast-low)"></circle><rect x="95" y="155" width="33" height="6" fill="var(--color-contrast-medium)"></rect></svg>'
published : true
---
import { Playground, PlaygroudCode } from 'components/styleguide';
import {ArticlePreviewData} from './demo';
import {ArticlePreview} from './'
import * as Layout from 'components/layout';
import {ArticlePreviewDemo as Demo} from './demo';

<Demo />

[TODO]

## Article

<ArticlePreview {...ArticlePreviewData} />

## Article (alt)

<ArticlePreview {...ArticlePreviewData} alt />

## Article Gallery v3

<Layout.Row>
    <ArticlePreview {...ArticlePreviewData} />
    <ArticlePreview {...ArticlePreviewData} />
    <ArticlePreview {...ArticlePreviewData} />
</Layout.Row>
