import {ArticlePreviewProps} from 'components/article/ArticlePreview';
import {Figure} from 'components/media';
import {Heading, Time} from 'components/editable';
import * as Utils from 'components/libs';
import React, {memo} from 'react';

import './ArticleList.scss';

export type ArticleListProps = {
	items?: Array<ArticlePreviewProps>;
};

export const ArticleList = memo((props: ArticleListProps) => {
	const base: string = 'stories';

	const {items} = props;

	if (!items) {
		return null;
	}

	return (
		<div className={Utils.getModifiers(base, {})}>
			<div className={`${base}__body`}>
				<div className={`${base}__main`}>
					<ol className={`${base}__list`}>
						{items.map((item, index) => {
							const {image, title, href, accent, date} = item;

							return (
								<li key={`story-${index}`}>
									<div className={`${base}-item`}>
										<div className={`${base}-item__main`}>
											{image && (
												<div className={`${base}-item__media`}>
													<Figure image={image} crop={'1:1'} />
												</div>
											)}

											<div className={`${base}-item__content`}>
												<Heading
													className={`${base}-item__title`}
													priority={4}
													title={title}
													href={href}
												/>
												{date && (
													<p>
														<Time date={date} />
													</p>
												)}
											</div>
										</div>
									</div>
								</li>
							);
						})}
					</ol>
				</div>
			</div>
		</div>
	);
});
