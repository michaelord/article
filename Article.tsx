import * as React from 'react';

import './Article.scss';

import {Author} from 'components/people';
import {Share} from 'components/navigation';
import {getModifiers} from 'components/libs';

type ArticleProps = {
	children: React.ReactNode;
};

export const Article = (props: ArticleProps) => {
	const {children} = props;

	const base: string = 'article';

	const atts: object = {
		className: getModifiers(base, {}),
	};

	return (
		<article {...atts}>
			<div className={`${base}__indicator`} />

			<header className={`${base}__header`}>
				<Share />
				<Author name="[Michael Ord]" position="[position]" />
			</header>
			<div className={`${base}__body`}>{children}</div>
		</article>
	);
};
