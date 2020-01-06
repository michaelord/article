import {CtaGroup} from 'components/content';
import {Heading, RichText, Tag, Time} from 'components/editable';
import {Figure} from 'components/media';
import * as Utils from 'components/libs';
import {Author, AuthorProps} from 'components/people';
import * as Types from 'components/types';
import React, {memo} from 'react';
import {ContainerQuery} from 'react-container-query';
import './ArticlePreview.scss';

export type ArticlePreviewProps = {
	title: Types.Text;
	href?: Types.Url;
	image?: Types.Image;
	accent?: Types.Accent;
	alt?: Types.TrueFalse;
	date?: string;
	content?: Types.RichText;
	category?: Types.Text;
	theme?: Types.Theme;
	author?: AuthorProps;
};

export const ArticlePreview = memo((props: ArticlePreviewProps) => {
	const base: string = 'article-preview';

	const query = {
		wide: {
			minWidth: 750,
		},
	};

	const {image, title, href, accent, theme, alt, category, date, content, author} = props;

	const atts = {
		'data-accent': accent,
		'data-theme': theme,
	};

	// TODO: make these configurable
	const showAuthor: boolean = true;
	const showReadMore: boolean = true;

	return (
		<ContainerQuery query={query}>
			{params => (
				<div {...atts} className={Utils.getModifiers(base, {alt, ...params})}>
					<div className={`${base}__body`}>
						{image && (
							<div className={`${base}__media`}>
								<Figure style="inset" image={{...image, loading: 'auto'}} crop={'4:3'} />
							</div>
						)}
						<div className={`${base}__main`}>
							<header className={`${base}__header`}>
								<Tag label={category} /> <Time date={date} />
								<Heading className={`${base}__title`} title={title} href={href} />
							</header>
							<div className={`${base}__content`}>
								<RichText content={content} />
								{showReadMore && (
									<CtaGroup
										items={{label: '[read more]', href, priority: 'secondary'}}
										className={`${base}__links`}
									/>
								)}
							</div>
							{showAuthor && author && (
								<footer className={`${base}__footer`}>
									<Author {...author} />
								</footer>
							)}
						</div>
					</div>
				</div>
			)}
		</ContainerQuery>
	);
});
