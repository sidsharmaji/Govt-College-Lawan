<?php
/**
 * Template for displaying archive pages
 */

get_header(); ?>

<div id="root">
    <div class="min-h-screen bg-neutral">
        <section class="relative h-[60vh] overflow-hidden">
            <div class="absolute inset-0 bg-[url('<?php echo get_theme_file_uri('assets/images/academics-banner.svg'); ?>')] bg-cover bg-center">
                <div class="absolute inset-0 bg-primary/50 backdrop-blur-sm"></div>
            </div>
            <div class="relative container h-full flex items-center justify-center text-center text-white">
                <div class="space-y-4">
                    <h1 class="text-5xl md:text-6xl font-display font-bold">
                        <?php
                        if (is_category()) {
                            single_cat_title();
                        } elseif (is_tag()) {
                            single_tag_title();
                        } elseif (is_author()) {
                            the_author();
                        } elseif (is_date()) {
                            echo get_the_date('F Y');
                        } else {
                            echo 'Archives';
                        }
                        ?>
                    </h1>
                </div>
            </div>
        </section>

        <div class="container py-12">
            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <?php
                if (have_posts()) :
                    while (have_posts()) :
                        the_post();
                        ?>
                        <article class="bg-white rounded-2xl shadow-soft overflow-hidden">
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="aspect-video overflow-hidden">
                                    <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover')); ?>
                                </div>
                            <?php endif; ?>
                            <div class="p-6 space-y-4">
                                <h2 class="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h2>
                                <div class="text-sm text-gray-500">
                                    <span><?php echo get_the_date(); ?></span>
                                    <span class="mx-2">•</span>
                                    <span><?php the_author(); ?></span>
                                </div>
                                <div class="text-gray-600">
                                    <?php the_excerpt(); ?>
                                </div>
                                <a href="<?php the_permalink(); ?>" class="inline-block text-secondary hover:text-primary transition-colors">
                                    Read More →
                                </a>
                            </div>
                        </article>
                        <?php
                    endwhile;

                    // Pagination
                    echo '<div class="mt-12 flex justify-center gap-4">';
                    echo paginate_links(array(
                        'prev_text' => '← Previous',
                        'next_text' => 'Next →',
                        'type' => 'list',
                        'class' => 'flex gap-2'
                    ));
                    echo '</div>';

                else :
                    ?>
                    <div class="col-span-full text-center py-12">
                        <h2 class="text-2xl font-bold text-gray-600">No posts found</h2>
                    </div>
                    <?php
                endif;
                ?>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>