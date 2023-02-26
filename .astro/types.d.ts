declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"gallery": {
"arc_browser_easel.md": {
  id: "arc_browser_easel.md",
  slug: "arc_browser_easel",
  body: string,
  collection: "gallery",
  data: any
},
"ax_note.md": {
  id: "ax_note.md",
  slug: "ax_note",
  body: string,
  collection: "gallery",
  data: any
},
"bezel.md": {
  id: "bezel.md",
  slug: "bezel",
  body: string,
  collection: "gallery",
  data: any
},
"blender_node_editor.md": {
  id: "blender_node_editor.md",
  slug: "blender_node_editor",
  body: string,
  collection: "gallery",
  data: any
},
"board_mix.md": {
  id: "board_mix.md",
  slug: "board_mix",
  body: string,
  collection: "gallery",
  data: any
},
"cables.md": {
  id: "cables.md",
  slug: "cables",
  body: string,
  collection: "gallery",
  data: any
},
"click_up_whiteboards.md": {
  id: "click_up_whiteboards.md",
  slug: "click_up_whiteboards",
  body: string,
  collection: "gallery",
  data: any
},
"clover.md": {
  id: "clover.md",
  slug: "clover",
  body: string,
  collection: "gallery",
  data: any
},
"concepts.md": {
  id: "concepts.md",
  slug: "concepts",
  body: string,
  collection: "gallery",
  data: any
},
"condensr.md": {
  id: "condensr.md",
  slug: "condensr",
  body: string,
  collection: "gallery",
  data: any
},
"count.md": {
  id: "count.md",
  slug: "count",
  body: string,
  collection: "gallery",
  data: any
},
"creately.md": {
  id: "creately.md",
  slug: "creately",
  body: string,
  collection: "gallery",
  data: any
},
"defter_notes.md": {
  id: "defter_notes.md",
  slug: "defter_notes",
  body: string,
  collection: "gallery",
  data: any
},
"diagrams.md": {
  id: "diagrams.md",
  slug: "diagrams",
  body: string,
  collection: "gallery",
  data: any
},
"doodle_board.md": {
  id: "doodle_board.md",
  slug: "doodle_board",
  body: string,
  collection: "gallery",
  data: any
},
"einblick.md": {
  id: "einblick.md",
  slug: "einblick",
  body: string,
  collection: "gallery",
  data: any
},
"endless_paper.md": {
  id: "endless_paper.md",
  slug: "endless_paper",
  body: string,
  collection: "gallery",
  data: any
},
"eraser.md": {
  id: "eraser.md",
  slug: "eraser",
  body: string,
  collection: "gallery",
  data: any
},
"everyone_draw.md": {
  id: "everyone_draw.md",
  slug: "everyone_draw",
  body: string,
  collection: "gallery",
  data: any
},
"excalidraw.md": {
  id: "excalidraw.md",
  slug: "excalidraw",
  body: string,
  collection: "gallery",
  data: any
},
"felt.md": {
  id: "felt.md",
  slug: "felt",
  body: string,
  collection: "gallery",
  data: any
},
"fermat.md": {
  id: "fermat.md",
  slug: "fermat",
  body: string,
  collection: "gallery",
  data: any
},
"fig_jam.md": {
  id: "fig_jam.md",
  slug: "fig_jam",
  body: string,
  collection: "gallery",
  data: any
},
"figma.md": {
  id: "figma.md",
  slug: "figma",
  body: string,
  collection: "gallery",
  data: any
},
"freeform.md": {
  id: "freeform.md",
  slug: "freeform",
  body: string,
  collection: "gallery",
  data: any
},
"g_u_g_a_super_whiteboard.md": {
  id: "g_u_g_a_super_whiteboard.md",
  slug: "g_u_g_a_super_whiteboard",
  body: string,
  collection: "gallery",
  data: any
},
"heptabase.md": {
  id: "heptabase.md",
  slug: "heptabase",
  body: string,
  collection: "gallery",
  data: any
},
"invision_freehand.md": {
  id: "invision_freehand.md",
  slug: "invision_freehand",
  body: string,
  collection: "gallery",
  data: any
},
"jade.md": {
  id: "jade.md",
  slug: "jade",
  body: string,
  collection: "gallery",
  data: any
},
"kinopio.md": {
  id: "kinopio.md",
  slug: "kinopio",
  body: string,
  collection: "gallery",
  data: any
},
"latitude.md": {
  id: "latitude.md",
  slug: "latitude",
  body: string,
  collection: "gallery",
  data: any
},
"leonardo.md": {
  id: "leonardo.md",
  slug: "leonardo",
  body: string,
  collection: "gallery",
  data: any
},
"liquid_text.md": {
  id: "liquid_text.md",
  slug: "liquid_text",
  body: string,
  collection: "gallery",
  data: any
},
"lorien.md": {
  id: "lorien.md",
  slug: "lorien",
  body: string,
  collection: "gallery",
  data: any
},
"lucidchart.md": {
  id: "lucidchart.md",
  slug: "lucidchart",
  body: string,
  collection: "gallery",
  data: any
},
"lucidscale.md": {
  id: "lucidscale.md",
  slug: "lucidscale",
  body: string,
  collection: "gallery",
  data: any
},
"lucidspark.md": {
  id: "lucidspark.md",
  slug: "lucidspark",
  body: string,
  collection: "gallery",
  data: any
},
"lunacy.md": {
  id: "lunacy.md",
  slug: "lunacy",
  body: string,
  collection: "gallery",
  data: any
},
"margin_note.md": {
  id: "margin_note.md",
  slug: "margin_note",
  body: string,
  collection: "gallery",
  data: any
},
"mavenoid.md": {
  id: "mavenoid.md",
  slug: "mavenoid",
  body: string,
  collection: "gallery",
  data: any
},
"mental_canvas.md": {
  id: "mental_canvas.md",
  slug: "mental_canvas",
  body: string,
  collection: "gallery",
  data: any
},
"metro_retro.md": {
  id: "metro_retro.md",
  slug: "metro_retro",
  body: string,
  collection: "gallery",
  data: any
},
"microsoft_whiteboard.md": {
  id: "microsoft_whiteboard.md",
  slug: "microsoft_whiteboard",
  body: string,
  collection: "gallery",
  data: any
},
"milanote.md": {
  id: "milanote.md",
  slug: "milanote",
  body: string,
  collection: "gallery",
  data: any
},
"milton.md": {
  id: "milton.md",
  slug: "milton",
  body: string,
  collection: "gallery",
  data: any
},
"mind_meister.md": {
  id: "mind_meister.md",
  slug: "mind_meister",
  body: string,
  collection: "gallery",
  data: any
},
"mind_node.md": {
  id: "mind_node.md",
  slug: "mind_node",
  body: string,
  collection: "gallery",
  data: any
},
"miro.md": {
  id: "miro.md",
  slug: "miro",
  body: string,
  collection: "gallery",
  data: any
},
"mischief.md": {
  id: "mischief.md",
  slug: "mischief",
  body: string,
  collection: "gallery",
  data: any
},
"mmm_page.md": {
  id: "mmm_page.md",
  slug: "mmm_page",
  body: string,
  collection: "gallery",
  data: any
},
"modyfi.md": {
  id: "modyfi.md",
  slug: "modyfi",
  body: string,
  collection: "gallery",
  data: any
},
"mural.md": {
  id: "mural.md",
  slug: "mural",
  body: string,
  collection: "gallery",
  data: any
},
"muse.md": {
  id: "muse.md",
  slug: "muse",
  body: string,
  collection: "gallery",
  data: any
},
"n8n.md": {
  id: "n8n.md",
  slug: "n8n",
  body: string,
  collection: "gallery",
  data: any
},
"natto_dev.md": {
  id: "natto_dev.md",
  slug: "natto_dev",
  body: string,
  collection: "gallery",
  data: any
},
"nodebook.md": {
  id: "nodebook.md",
  slug: "nodebook",
  body: string,
  collection: "gallery",
  data: any
},
"nodenogg_in.md": {
  id: "nodenogg_in.md",
  slug: "nodenogg_in",
  body: string,
  collection: "gallery",
  data: any
},
"nodes.md": {
  id: "nodes.md",
  slug: "nodes",
  body: string,
  collection: "gallery",
  data: any
},
"ok_so.md": {
  id: "ok_so.md",
  slug: "ok_so",
  body: string,
  collection: "gallery",
  data: any
},
"org_pad.md": {
  id: "org_pad.md",
  slug: "org_pad",
  body: string,
  collection: "gallery",
  data: any
},
"origami_studio.md": {
  id: "origami_studio.md",
  slug: "origami_studio",
  body: string,
  collection: "gallery",
  data: any
},
"quadratic.md": {
  id: "quadratic.md",
  slug: "quadratic",
  body: string,
  collection: "gallery",
  data: any
},
"reduct.md": {
  id: "reduct.md",
  slug: "reduct",
  body: string,
  collection: "gallery",
  data: any
},
"renote.md": {
  id: "renote.md",
  slug: "renote",
  body: string,
  collection: "gallery",
  data: any
},
"rnote.md": {
  id: "rnote.md",
  slug: "rnote",
  body: string,
  collection: "gallery",
  data: any
},
"scapple.md": {
  id: "scapple.md",
  slug: "scapple",
  body: string,
  collection: "gallery",
  data: any
},
"scribble_together.md": {
  id: "scribble_together.md",
  slug: "scribble_together",
  body: string,
  collection: "gallery",
  data: any
},
"scrintal.md": {
  id: "scrintal.md",
  slug: "scrintal",
  body: string,
  collection: "gallery",
  data: any
},
"sketch.md": {
  id: "sketch.md",
  slug: "sketch",
  body: string,
  collection: "gallery",
  data: any
},
"sprout_place.md": {
  id: "sprout_place.md",
  slug: "sprout_place",
  body: string,
  collection: "gallery",
  data: any
},
"sticky_studio.md": {
  id: "sticky_studio.md",
  slug: "sticky_studio",
  body: string,
  collection: "gallery",
  data: any
},
"subset.md": {
  id: "subset.md",
  slug: "subset",
  body: string,
  collection: "gallery",
  data: any
},
"switchboard.md": {
  id: "switchboard.md",
  slug: "switchboard",
  body: string,
  collection: "gallery",
  data: any
},
"sync_space.md": {
  id: "sync_space.md",
  slug: "sync_space",
  body: string,
  collection: "gallery",
  data: any
},
"tensorflow.md": {
  id: "tensorflow.md",
  slug: "tensorflow",
  body: string,
  collection: "gallery",
  data: any
},
"tinderbox.md": {
  id: "tinderbox.md",
  slug: "tinderbox",
  body: string,
  collection: "gallery",
  data: any
},
"tldraw.md": {
  id: "tldraw.md",
  slug: "tldraw",
  body: string,
  collection: "gallery",
  data: any
},
"ultra.md": {
  id: "ultra.md",
  slug: "ultra",
  body: string,
  collection: "gallery",
  data: any
},
"visily.md": {
  id: "visily.md",
  slug: "visily",
  body: string,
  collection: "gallery",
  data: any
},
"visualist.md": {
  id: "visualist.md",
  slug: "visualist",
  body: string,
  collection: "gallery",
  data: any
},
"whimsical.md": {
  id: "whimsical.md",
  slug: "whimsical",
  body: string,
  collection: "gallery",
  data: any
},
"write_reason.md": {
  id: "write_reason.md",
  slug: "write_reason",
  body: string,
  collection: "gallery",
  data: any
},
"zero_g.md": {
  id: "zero_g.md",
  slug: "zero_g",
  body: string,
  collection: "gallery",
  data: any
},
"zoom_notes.md": {
  id: "zoom_notes.md",
  slug: "zoom_notes",
  body: string,
  collection: "gallery",
  data: any
},
"zoom_whiteboard.md": {
  id: "zoom_whiteboard.md",
  slug: "zoom_whiteboard",
  body: string,
  collection: "gallery",
  data: any
},
},
"history": {
"1963_sketchpad.md": {
  id: "1963_sketchpad.md",
  slug: "1963_sketchpad",
  body: string,
  collection: "history",
  data: any
},
"1979_post_it.md": {
  id: "1979_post_it.md",
  slug: "1979_post_it",
  body: string,
  collection: "history",
  data: any
},
"1987_adobe_illustrator.md": {
  id: "1987_adobe_illustrator.md",
  slug: "1987_adobe_illustrator",
  body: string,
  collection: "history",
  data: any
},
"1998_fireworks.md": {
  id: "1998_fireworks.md",
  slug: "1998_fireworks",
  body: string,
  collection: "history",
  data: any
},
"2000_reinventing_comics.md": {
  id: "2000_reinventing_comics.md",
  slug: "2000_reinventing_comics",
  body: string,
  collection: "history",
  data: any
},
"2012_sketch.md": {
  id: "2012_sketch.md",
  slug: "2012_sketch",
  body: string,
  collection: "history",
  data: any
},
"2015_realtime_board.md": {
  id: "2015_realtime_board.md",
  slug: "2015_realtime_board",
  body: string,
  collection: "history",
  data: any
},
"2022_figma.md": {
  id: "2022_figma.md",
  slug: "2022_figma",
  body: string,
  collection: "history",
  data: any
},
},

	};

	type ContentConfig = never;
}
