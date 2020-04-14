/** @jsx jsx */
import {FunctionComponent} from 'react';

import {Link} from 'gatsby';
import {jsx} from 'theme-ui';

import Layout from 'components/common/layout';
import List from 'components/common/list';
import Listing from 'components/common/listing';
import Title from 'components/common/title';

import useConfig from 'hooks/use-config';

import {replaceSlashes} from 'utils/string';

import {NodesEntity, PageProps} from 'model/PageProps';

// @ts-ignore
import Hero from 'sections/hero';
// @ts-ignore
import Projects from 'sections/projects';

import * as styles from './styles';

const Homepage: FunctionComponent<PageProps> = (props) => {
  const { basePath, postsPath } = useConfig();

  return (
    <Layout>
      <section sx={styles.section}>
        <Hero />
      </section>
      {/* Last Posts */}
      <Title text="Latest Posts">
        <Link to={replaceSlashes(`/${basePath}/${postsPath}`)}>
          Read all posts
        </Link>
      </Title>
      <Listing posts={props.data.allPost.nodes} showTags={false} />
      {/* Pinned Repos */}
      <Title text="Featured Projects">
        <Link to="/projects">Check all projects</Link>
      </Title>
      <Projects />
    </Layout>
  );
};

export default Homepage;
