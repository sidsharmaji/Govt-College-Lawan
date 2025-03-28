<?php
/**
 * Template for displaying single posts
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
                    <h1 class="text-5xl md:text-6xl font-display font-bold"><?php the_title(); ?></h1>
                    <div class="text-lg opacity-80">
                        <span><?php echo get_the_date(); ?></span>
                        <span class="mx-2">•</span>
                        <span><?php the_author(); ?></span>
                    </div>
                </div>
            </div>
        </section>

        <div class="container py-12">
            <div class="bg-white rounded-2xl shadow-soft p-8 max-w-4xl mx-auto">
                <article class="prose prose-lg max-w-none">
                    <?php
                    while (have_posts()) :
                        the_post();
                        the_content();
                    endwhile;
                    ?>
                </article>

                <div class="mt-8 pt-8 border-t">
                    <?php
                    if (comments_open() || get_comments_number()) :
                        comments_template();
                    endif;
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>