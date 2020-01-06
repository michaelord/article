import React from 'react';
import {Placeholder} from 'components/libs';
import {AuthorData} from 'components/people/demo';
import {ArticleProps} from '../Article';
import {ArticleListProps} from '../ArticleList';
import {ArticlePreviewProps} from '../ArticlePreview';

export const ArticleData: ArticleProps = {};

export const ArticleDemo = () => <div>demo</div>;

export const ArticlePreviewData: ArticlePreviewProps = {
	title: Placeholder.heading(),
	content: `<p>${Placeholder.words(20)}</p>`,
	href: '#',
	author: AuthorData,
	date: '2019-10-05',
	image: {
		color: '#4c482d',
		src:
			'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80',
	},
};

export const ArticlePreviewDemo = () => <div>demo</div>;

export const ArticleListData: ArticleListProps = {
	items: [ArticlePreviewData, ArticlePreviewData, ArticlePreviewData, ArticlePreviewData, ArticlePreviewData],
};

export const ArticleListDemo = () => <div>demo</div>;
