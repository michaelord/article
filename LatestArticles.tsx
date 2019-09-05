import * as React from 'react';

import {getModifiers} from 'components/libs';
import {ContentBlock} from 'components/content';

import {graphql, useStaticQuery} from 'gatsby';
import {Block} from 'components/block';

export const LatestArticles = (/*props: LatestArticlesProps*/) => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				filter: {fileAbsolutePath: {regex: "/news/"}, frontmatter: {published: {eq: true}}}
				limit: 3
				sort: {fields: [frontmatter___date], order: DESC}
			) {
				edges {
					node {
						frontmatter {
							title
							date
						}
						excerpt
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	const base: string = 'latest';

	const atts: object = {
		className: getModifiers(base, {}),
	};

	return (
		<div {...atts}>
			<Block>
				{data.allMarkdownRemark.edges.map((edge: any, index: number) => {
					return (
						<ContentBlock
							key={`post-${index}`}
							title={edge.node.frontmatter.title}
							content={edge.node.excerpt}
							href={`/news/${edge.node.fields.slug}`}
						/>
					);
				})}
			</Block>
		</div>
	);
};
