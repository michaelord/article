import {Container} from 'components/layout';
import * as Utils from 'components/libs';
import {Share} from 'components/navigation';
import {Author, AuthorProps} from 'components/people';
import * as Types from 'components/types';
import React from 'react';
import './Article.scss';

import {Figure} from 'components/media';
import {Blockquote} from 'components/editable';
import {BlockquoteData, FigureData} from 'components/editable/demo';
import {Placeholder} from 'components/libs';

export type ArticleProps = {
	children: Types.Children;
	author?: AuthorProps;
};

export const Article = (props: ArticleProps) => {
	const {children, author} = props;

	const base: string = 'article';

	const atts: object = {
		className: Utils.getModifiers(base, {}),
	};

	return (
		<article {...atts}>
			<div className={`${base}__indicator`} />
			<div className={`${base}__inner`}>
				<header className={`${base}__header`}>
					<Share />
					{author && <Author {...author} />}
				</header>
				<div className={`${base}__body`}>
					<Container>
						<div className={`${base}__main`}>
							{children}

							<Placeholder.P />
							<Blockquote {...BlockquoteData} pull="right" style="quote" />
							<Placeholder.P />
							<Placeholder.P />
							<Placeholder.P />
							<Placeholder.P />
							<Blockquote {...BlockquoteData} />
							<Placeholder.P />
							<Figure {...FigureData} />
							<Placeholder.P />
						</div>
					</Container>
				</div>
			</div>
		</article>
	);
};
