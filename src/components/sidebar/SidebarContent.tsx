import React from 'react';

export const SidebarContent = () => {
  return (
    <>
      <div className="sidebar-section">
              <ul className="nav nav-sidebar" data-nav-type="accordion">
                <li className="nav-item-header pt-0">
                  <div className="text-uppercase fs-sm lh-sm opacity-50 sidebar-resize-hide">
                    Main
                  </div>
                  <i className="ph-dots-three sidebar-resize-show" />
                </li>
                <li className="nav-item">
                  <a href="index.html" className="nav-link active">
                    <i className="ph-house" />
                    <span>
                      Dashboard
                      <span className="d-block fw-normal opacity-50">
                        No pending orders
                      </span>
                    </span>
                  </a>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-layout" />
                    <span>Layouts</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="index.html" className="nav-link active">
                        Default layout
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../../layout_2/full/index.html" className="nav-link">
                        Layout 2
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../../layout_3/full/index.html" className="nav-link">
                        Layout 3
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../../layout_4/full/index.html" className="nav-link">
                        Layout 4
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../../layout_5/full/index.html" className="nav-link">
                        Layout 5
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../../layout_6/full/index.html" className="nav-link">
                        Layout 6
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../../layout_7/full/index.html"
                        className="nav-link disabled"
                      >
                        Layout 7{" "}
                        <span className="badge align-self-center ms-auto">
                          Coming soon
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-swatches" />
                    <span>Themes</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="index.html" className="nav-link active">
                        Default
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../../../LTR/material/full/index.html"
                        className="nav-link disabled"
                      >
                        Material{" "}
                        <span className="badge align-self-center ms-auto">
                          Coming soon
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../../../LTR/clean/full/index.html"
                        className="nav-link disabled"
                      >
                        Clean{" "}
                        <span className="badge align-self-center ms-auto">
                          Coming soon
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-note-blank" />
                    <span>Starter kit</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="../seed/layout_static.html" className="nav-link">
                        Static layout
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../seed/layout_no_header.html" className="nav-link">
                        No header
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../seed/layout_no_footer.html" className="nav-link">
                        No footer
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a
                        href="../seed/layout_fixed_header.html"
                        className="nav-link"
                      >
                        Fixed header
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../seed/layout_fixed_footer.html"
                        className="nav-link"
                      >
                        Fixed footer
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a
                        href="../seed/layout_2_sidebars_1_side.html"
                        className="nav-link"
                      >
                        2 sidebars on 1 side
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../seed/layout_2_sidebars_2_sides.html"
                        className="nav-link"
                      >
                        2 sidebars on 2 sides
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../seed/layout_3_sidebars.html" className="nav-link">
                        3 sidebars
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="../seed/layout_boxed_page.html" className="nav-link">
                        Boxed page
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../seed/layout_boxed_content.html"
                        className="nav-link"
                      >
                        Boxed content
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    href="../../../../docs/other_changelog.html"
                    className="nav-link"
                  >
                    <i className="ph-list-numbers" />
                    <span>Changelog</span>
                    <span className="badge bg-primary align-self-center rounded-pill ms-auto">
                      4.0
                    </span>
                  </a>
                </li>
                <li className="nav-item-header">
                  <div className="text-uppercase fs-sm lh-sm opacity-50 sidebar-resize-hide">
                    Forms
                  </div>
                  <i className="ph-dots-three sidebar-resize-show" />
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-note-pencil" />
                    <span>Form components</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="form_autocomplete.html" className="nav-link">
                        Autocomplete
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_checkboxes_radios.html" className="nav-link">
                        Checkboxes &amp; radios
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_dual_listboxes.html" className="nav-link">
                        Dual Listboxes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_controls_extended.html" className="nav-link">
                        Extended controls
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_floating_labels.html" className="nav-link">
                        Floating labels
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_actions.html" className="nav-link">
                        Form actions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_wizard.html" className="nav-link">
                        Form wizard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_inputs.html" className="nav-link">
                        Input fields
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_input_groups.html" className="nav-link">
                        Input groups
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_multiselect.html" className="nav-link">
                        Multiselect
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_select2.html" className="nav-link">
                        Select2 selects
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_tags.html" className="nav-link">
                        Tags
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_validation_styles.html" className="nav-link">
                        Validation styles
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_validation_library.html" className="nav-link">
                        Validation library
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-text-aa" />
                    <span>Text editors</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        CKEditor
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="editor_ckeditor_classic.html"
                            className="nav-link"
                          >
                            Classic
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="editor_ckeditor_document.html"
                            className="nav-link"
                          >
                            Document
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="editor_ckeditor_balloon.html"
                            className="nav-link"
                          >
                            Balloon
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="editor_quill.html" className="nav-link">
                        Quill
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="editor_trumbowyg.html" className="nav-link">
                        Trumbowyg
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="editor_code.html" className="nav-link">
                        Code
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-hand-pointing" />
                    <span>Pickers</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="picker_color.html" className="nav-link">
                        Color pickers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="picker_date.html" className="nav-link">
                        Date &amp; time pickers
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-browser" />
                    <span>Form layouts</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="form_layout_horizontal.html" className="nav-link">
                        Horizontal form
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_layout_vertical.html" className="nav-link">
                        Vertical form
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="form_layout_grid.html" className="nav-link">
                        Input grid
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item-header">
                  <div className="text-uppercase fs-sm lh-sm opacity-50 sidebar-resize-hide">
                    Components
                  </div>
                  <i className="ph-dots-three sidebar-resize-show" />
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-squares-four" />
                    <span>Basic components</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="components_accordion.html" className="nav-link">
                        Accordion
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_alerts.html" className="nav-link">
                        Alerts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_badges.html" className="nav-link">
                        Badges
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_breadcrumbs.html" className="nav-link">
                        Breadcrumbs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_buttons.html" className="nav-link">
                        Buttons
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_carousel.html" className="nav-link">
                        Carousel
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_collapsible.html" className="nav-link">
                        Collapsible
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_dropdowns.html" className="nav-link">
                        Dropdown menus
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_list_group.html" className="nav-link">
                        List group
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_media.html" className="nav-link">
                        Media objects
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_modals.html" className="nav-link">
                        Modals
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_offcanvas.html" className="nav-link">
                        Offcanvas
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_pagination.html" className="nav-link">
                        Pagination
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_pills.html" className="nav-link">
                        Pills
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_placeholder.html" className="nav-link">
                        Placeholder
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_popovers.html" className="nav-link">
                        Popovers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_progress.html" className="nav-link">
                        Progress
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_scrollspy.html" className="nav-link">
                        Scrollspy
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_tabs.html" className="nav-link">
                        Tabs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_toasts.html" className="nav-link">
                        Toasts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_tooltips.html" className="nav-link">
                        Tooltips
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-article" />
                    <span>Content styling</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="content_page_header.html" className="nav-link">
                        Page header
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="content_cards.html" className="nav-link">
                        Cards
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_cards_header.html" className="nav-link">
                        Card header elements
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_cards_footer.html" className="nav-link">
                        Card footer elements
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_cards_content.html" className="nav-link">
                        Card content
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_cards_layouts.html" className="nav-link">
                        Card layouts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_cards_draggable.html" className="nav-link">
                        Draggable cards
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="content_helpers_flex.html" className="nav-link">
                        Flex utilities
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_helpers.html" className="nav-link">
                        Helper classes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_grid.html" className="nav-link">
                        Grid system
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="content_syntax_highlighter.html"
                        className="nav-link"
                      >
                        Syntax highlighter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_text_styling.html" className="nav-link">
                        Text styling
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_typography.html" className="nav-link">
                        Typography
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-dots-three-circle" />
                    <span>Extra components</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="extra_noty.html" className="nav-link">
                        Noty notifications
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extra_sweetalert.html" className="nav-link">
                        Sweet alert
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extra_sliders_noui.html" className="nav-link">
                        NoUI sliders
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extra_sliders_ion.html" className="nav-link">
                        Ion range sliders
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extra_trees.html" className="nav-link">
                        Dynamic tree views
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extra_fab.html" className="nav-link">
                        Floating action buttons
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extra_session_timeout.html" className="nav-link">
                        Session timeout
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extra_idle_timeout.html" className="nav-link">
                        Idle timeout
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-drop" />
                    <span>Color system</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="colors_primary.html" className="nav-link">
                        Primary palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_secondary.html" className="nav-link">
                        Secondary palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_danger.html" className="nav-link">
                        Danger palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_success.html" className="nav-link">
                        Success palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_warning.html" className="nav-link">
                        Warning palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_info.html" className="nav-link">
                        Info palette
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="colors_pink.html" className="nav-link">
                        Pink palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_purple.html" className="nav-link">
                        Purple palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_indigo.html" className="nav-link">
                        Indigo palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_teal.html" className="nav-link">
                        Teal palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_yellow.html" className="nav-link">
                        Yellow palette
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-spinner spinner" />
                    <span>Animations</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="animations_css3.html" className="nav-link">
                        CSS3 animations
                      </a>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Velocity animations
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="animations_velocity_basic.html"
                            className="nav-link"
                          >
                            Basic usage
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="animations_velocity_ui.html"
                            className="nav-link"
                          >
                            UI pack effects
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="animations_velocity_examples.html"
                            className="nav-link"
                          >
                            Advanced examples
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-smiley-wink" />
                    <span>Icons</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="icons_phosphor.html" className="nav-link">
                        Phosphor
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="icons_icomoon.html" className="nav-link">
                        Icomoon
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="icons_material.html" className="nav-link">
                        Material
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="icons_fontawesome.html" className="nav-link">
                        Font awesome
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item-header">
                  <div className="text-uppercase fs-sm lh-sm opacity-50 sidebar-resize-hide">
                    Layout
                  </div>
                  <i className="ph-dots-three sidebar-resize-show" />
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-layout" />
                    <span>Page layouts</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="layout_static.html" className="nav-link">
                        Static layout
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="layout_no_header.html" className="nav-link">
                        No header
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="layout_no_footer.html" className="nav-link">
                        No footer
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="layout_fixed_header.html" className="nav-link">
                        Fixed header
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="layout_fixed_footer.html" className="nav-link">
                        Fixed footer
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="layout_2_sidebars_1_side.html" className="nav-link">
                        2 sidebars on 1 side
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="layout_2_sidebars_2_sides.html" className="nav-link">
                        2 sidebars on 2 sides
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="layout_3_sidebars.html" className="nav-link">
                        3 sidebars
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="layout_boxed_page.html" className="nav-link">
                        Boxed page
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="layout_boxed_content.html" className="nav-link">
                        Boxed content
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-columns" />
                    <span>Sidebars</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Main sidebar
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="sidebar_default_resizable.html"
                            className="nav-link"
                          >
                            Resizable
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_default_resized.html"
                            className="nav-link"
                          >
                            Resized
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_default_collapsible.html"
                            className="nav-link"
                          >
                            Collapsible
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_default_collapsed.html"
                            className="nav-link"
                          >
                            Collapsed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_default_hideable.html"
                            className="nav-link"
                          >
                            Hideable
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_default_hidden.html"
                            className="nav-link"
                          >
                            Hidden
                          </a>
                        </li>
                        <li className="nav-item-divider" />
                        <li className="nav-item">
                          <a
                            href="sidebar_default_color_light.html"
                            className="nav-link"
                          >
                            Light color
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Secondary sidebar
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="sidebar_secondary_collapsible.html"
                            className="nav-link"
                          >
                            Collapsible
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_secondary_collapsed.html"
                            className="nav-link"
                          >
                            Collapsed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_secondary_hideable.html"
                            className="nav-link"
                          >
                            Hideable
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_secondary_hidden.html"
                            className="nav-link"
                          >
                            Hidden
                          </a>
                        </li>
                        <li className="nav-item-divider" />
                        <li className="nav-item">
                          <a
                            href="sidebar_secondary_color_dark.html"
                            className="nav-link"
                          >
                            Dark color
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Right sidebar
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="sidebar_right_collapsible.html"
                            className="nav-link"
                          >
                            Collapsible
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_right_collapsed.html"
                            className="nav-link"
                          >
                            Collapsed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_right_hideable.html"
                            className="nav-link"
                          >
                            Hideable
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="sidebar_right_hidden.html" className="nav-link">
                            Hidden
                          </a>
                        </li>
                        <li className="nav-item-divider" />
                        <li className="nav-item">
                          <a
                            href="sidebar_right_color_dark.html"
                            className="nav-link"
                          >
                            Dark color
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Content sidebar
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="sidebar_content_left.html" className="nav-link">
                            Left aligned
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_content_left_stretch.html"
                            className="nav-link"
                          >
                            Left stretched
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_content_left_sections.html"
                            className="nav-link"
                          >
                            Left sectioned
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="sidebar_content_right.html" className="nav-link">
                            Right aligned
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_content_right_stretch.html"
                            className="nav-link"
                          >
                            Right stretched
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_content_right_sections.html"
                            className="nav-link"
                          >
                            Right sectioned
                          </a>
                        </li>
                        <li className="nav-item-divider" />
                        <li className="nav-item">
                          <a
                            href="sidebar_content_color_dark.html"
                            className="nav-link"
                          >
                            Dark color
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Sticky areas
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="sidebar_sticky_header.html" className="nav-link">
                            Header
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="sidebar_sticky_footer.html" className="nav-link">
                            Footer
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_sticky_header_footer.html"
                            className="nav-link"
                          >
                            Header and footer
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="sidebar_sticky_custom.html" className="nav-link">
                            Custom elements
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="sidebar_components.html" className="nav-link">
                        Sidebar components
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-rows" />
                    <span>Navbars</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Single navbar
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="navbar_single_bottom_fixed.html"
                            className="nav-link"
                          >
                            Bottom fixed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="navbar_single_header_before.html"
                            className="nav-link"
                          >
                            Before page header
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="navbar_single_header_before_fixed.html"
                            className="nav-link"
                          >
                            Before page header fixed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="navbar_single_header_after.html"
                            className="nav-link"
                          >
                            After page header
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="navbar_single_header_after_sticky.html"
                            className="nav-link"
                          >
                            After page header sticky
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Multiple navbars
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="navbar_multiple_top.html" className="nav-link">
                            Multiple top
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="navbar_multiple_bottom_static.html"
                            className="nav-link"
                          >
                            Multiple bottom static
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="navbar_multiple_bottom_fixed.html"
                            className="nav-link"
                          >
                            Multiple bottom fixed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="navbar_multiple_top_bottom_fixed.html"
                            className="nav-link"
                          >
                            Top and bottom fixed
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Content navbar
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="navbar_component_single.html"
                            className="nav-link"
                          >
                            Single navbar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="navbar_component_multiple.html"
                            className="nav-link"
                          >
                            Multiple navbars
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="navbar_colors.html" className="nav-link">
                        Color options
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="navbar_sizes.html" className="nav-link">
                        Sizing options
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="navbar_components.html" className="nav-link">
                        Navbar components
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-arrow-fat-lines-down" />
                    <span>Vertical navigation</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a
                        href="navigation_vertical_styles.html"
                        className="nav-link"
                      >
                        Navigation styles
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_vertical_collapsible.html"
                        className="nav-link"
                      >
                        Collapsible menu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_vertical_accordion.html"
                        className="nav-link"
                      >
                        Accordion menu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_vertical_bordered.html"
                        className="nav-link"
                      >
                        Bordered navigation
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_vertical_right_icons.html"
                        className="nav-link"
                      >
                        Right icons
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_vertical_badges.html"
                        className="nav-link"
                      >
                        Badges
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_vertical_disabled.html"
                        className="nav-link"
                      >
                        Disabled items
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-arrow-fat-lines-right" />
                    <span>Horizontal navigation</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a
                        href="navigation_horizontal_styles.html"
                        className="nav-link"
                      >
                        Navigation styles
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_horizontal_elements.html"
                        className="nav-link"
                      >
                        Navigation elements
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_horizontal_tabs.html"
                        className="nav-link"
                      >
                        Tabbed navigation
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_horizontal_disabled.html"
                        className="nav-link"
                      >
                        Disabled navigation links
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_horizontal_mega.html"
                        className="nav-link"
                      >
                        Horizontal mega menu
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-arrow-elbow-down-right" />{" "}
                    <span>Menu levels</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Second level
                      </a>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Second level with child
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            Third level
                          </a>
                        </li>
                        <li className="nav-item nav-item-submenu">
                          <a href="#" className="nav-link">
                            Third level with child
                          </a>
                          <ul className="nav-group-sub collapse">
                            <li className="nav-item">
                              <a href="#" className="nav-link">
                                Fourth level
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#" className="nav-link">
                                Fourth level
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            Third level
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Second level
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item-header">
                  <div className="text-uppercase fs-sm lh-sm opacity-50 sidebar-resize-hide">
                    Data visualization
                  </div>
                  <i className="ph-dots-three sidebar-resize-show" />
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-chart-line" />
                    <span>Echarts library</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="echarts_lines.html" className="nav-link">
                        Line charts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="echarts_areas.html" className="nav-link">
                        Area charts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="echarts_columns_waterfalls.html"
                        className="nav-link"
                      >
                        Columns and waterfalls
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="echarts_bars_tornados.html" className="nav-link">
                        Bars and tornados
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="echarts_scatter.html" className="nav-link">
                        Scatter charts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="echarts_pies_donuts.html" className="nav-link">
                        Pies and donuts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="echarts_funnels_calendars.html" className="nav-link">
                        Funnels and calendars
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="echarts_candlesticks_others.html"
                        className="nav-link"
                      >
                        Candlesticks and others
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-chart-bar" />
                    <span>D3 library</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="d3_lines_basic.html" className="nav-link">
                        Simple lines
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="d3_lines_advanced.html" className="nav-link">
                        Advanced lines
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="d3_bars_basic.html" className="nav-link">
                        Simple bars
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="d3_bars_advanced.html" className="nav-link">
                        Advanced bars
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="d3_pies.html" className="nav-link">
                        Pie charts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="d3_circle_diagrams.html" className="nav-link">
                        Circle diagrams
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="d3_tree.html" className="nav-link">
                        Tree layout
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="d3_other.html" className="nav-link">
                        Other charts
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-chart-pie-slice" />
                    <span>C3 library</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="c3_lines_areas.html" className="nav-link">
                        Lines and areas
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="c3_bars_pies.html" className="nav-link">
                        Bars and pies
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="c3_advanced.html" className="nav-link">
                        Advanced examples
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="c3_axis.html" className="nav-link">
                        Chart axis
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="c3_grid.html" className="nav-link">
                        Grid options
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-google-logo" />
                    <span>Google charts</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="google_lines.html" className="nav-link">
                        Line charts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="google_bars.html" className="nav-link">
                        Bar charts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="google_pies.html" className="nav-link">
                        Pie charts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="google_scatter_bubble.html" className="nav-link">
                        Bubble &amp; scatter charts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="google_other.html" className="nav-link">
                        Other charts
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-map-pin" />
                    <span>Maps integration</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="maps_leaflet.html" className="nav-link">
                        Leaflet maps
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="maps_echarts.html" className="nav-link">
                        ECharts maps
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="maps_vector.html" className="nav-link disabled">
                        D3.js maps{" "}
                        <span className="badge bg-transparent align-self-center ms-auto">
                          Coming soon
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item-header">
                  <div className="text-uppercase fs-sm lh-sm opacity-50 sidebar-resize-hide">
                    Extensions
                  </div>
                  <i className="ph-dots-three sidebar-resize-show" />
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-circles-three" />
                    <span>Extensions</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="extension_image_cropper.html" className="nav-link">
                        Image cropper
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extension_mark.html" className="nav-link">
                        Mark
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extension_dnd.html" className="nav-link">
                        Drag and drop
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-cloud-arrow-up" />
                    <span>File uploaders</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="uploader_plupload.html" className="nav-link">
                        Plupload
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="uploader_bootstrap.html" className="nav-link">
                        Bootstrap file uploader
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="uploader_dropzone.html" className="nav-link">
                        Dropzone
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-calendar-check" />
                    <span>Event calendars</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="fullcalendar_views.html" className="nav-link">
                        Basic views
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="fullcalendar_styling.html" className="nav-link">
                        Event styling
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="fullcalendar_formats.html" className="nav-link">
                        Language and time
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="fullcalendar_advanced.html" className="nav-link">
                        Advanced usage
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-globe" />
                    <span>Internationalization</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a
                        href="internationalization_switch_direct.html"
                        className="nav-link"
                      >
                        Direct translation
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="internationalization_switch_query.html"
                        className="nav-link"
                      >
                        Querystring parameter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="internationalization_fallback.html"
                        className="nav-link"
                      >
                        Language fallback
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="internationalization_callbacks.html"
                        className="nav-link"
                      >
                        Callbacks
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item-header">
                  <div className="text-uppercase fs-sm lh-sm opacity-50 sidebar-resize-hide">
                    Tables
                  </div>
                  <i className="ph-dots-three sidebar-resize-show" />
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-table" />
                    <span>Basic tables</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="table_basic.html" className="nav-link">
                        Basic examples
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="table_sizing.html" className="nav-link">
                        Table sizing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="table_borders.html" className="nav-link">
                        Table borders
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="table_styling.html" className="nav-link">
                        Table styling
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="table_elements.html" className="nav-link">
                        Table elements
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-square-half-bottom" />
                    <span>Grid.js tables</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="gridjs_basic.html" className="nav-link">
                        Basic
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="gridjs_data_source.html" className="nav-link">
                        Data source
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="gridjs_server_side.html" className="nav-link">
                        Server side
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="gridjs_customizing.html" className="nav-link">
                        Customizing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="gridjs_advanced.html" className="nav-link">
                        Advanced
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-square-half" />
                    <span>Data tables</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="datatable_basic.html" className="nav-link">
                        Basic initialization
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="datatable_styling.html" className="nav-link">
                        Basic styling
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="datatable_advanced.html" className="nav-link">
                        Advanced examples
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="datatable_sorting.html" className="nav-link">
                        Sorting options
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="datatable_api.html" className="nav-link">
                        Using API
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="datatable_data_sources.html" className="nav-link">
                        Data sources
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-puzzle-piece" />
                    <span>Data tables extensions</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a
                        href="datatable_extension_reorder.html"
                        className="nav-link"
                      >
                        Columns reorder
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="datatable_extension_row_reorder.html"
                        className="nav-link"
                      >
                        Row reorder
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="datatable_extension_fixed_columns.html"
                        className="nav-link"
                      >
                        Fixed columns
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="datatable_extension_autofill.html"
                        className="nav-link"
                      >
                        Auto fill
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="datatable_extension_key_table.html"
                        className="nav-link"
                      >
                        Key table
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="datatable_extension_scroller.html"
                        className="nav-link"
                      >
                        Scroller
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="datatable_extension_select.html"
                        className="nav-link"
                      >
                        Select
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="datatable_extension_responsive.html"
                        className="nav-link"
                      >
                        Responsive
                      </a>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Buttons
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="datatable_extension_buttons_init.html"
                            className="nav-link"
                          >
                            Initialization
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="datatable_extension_buttons_pdf.html"
                            className="nav-link"
                          >
                            PDF buttons
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="datatable_extension_buttons_excel.html"
                            className="nav-link"
                          >
                            Excel buttons
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="datatable_extension_buttons_print.html"
                            className="nav-link"
                          >
                            Print buttons
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="datatable_extension_buttons_html5.html"
                            className="nav-link"
                          >
                            HTML5 buttons
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        href="datatable_extension_colvis.html"
                        className="nav-link"
                      >
                        Columns visibility
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item-header">
                  <div className="text-uppercase fs-sm lh-sm opacity-50 sidebar-resize-hide">
                    Page kits
                  </div>
                  <i className="ph-dots-three sidebar-resize-show" />
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-cards" />
                    <span>General pages</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="general_feed.html" className="nav-link">
                        Feed
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="general_embeds.html" className="nav-link">
                        Embeds
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="general_faq.html" className="nav-link">
                        FAQ page
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="general_knowledgebase.html" className="nav-link">
                        Knowledgebase
                      </a>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Blog
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="blog_classic_v.html" className="nav-link">
                            Classic vertical
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog_classic_h.html" className="nav-link">
                            Classic horizontal
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog_grid.html" className="nav-link">
                            Grid
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog_single.html" className="nav-link">
                            Single post
                          </a>
                        </li>
                        <li className="nav-item-divider" />
                        <li className="nav-item">
                          <a href="blog_sidebar_left.html" className="nav-link">
                            Left sidebar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog_sidebar_right.html" className="nav-link">
                            Right sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Timelines
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="timelines_left.html" className="nav-link">
                            Left timeline
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="timelines_right.html" className="nav-link">
                            Right timeline
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="timelines_center.html" className="nav-link">
                            Centered timeline
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Gallery
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="gallery_grid.html" className="nav-link">
                            Media grid
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="gallery_titles.html" className="nav-link">
                            Media with titles
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="gallery_description.html" className="nav-link">
                            Media with description
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="gallery_library.html" className="nav-link">
                            Media library
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-wrench" />
                    <span>Service pages</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="service_sitemap.html" className="nav-link">
                        Sitemap
                      </a>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Invoicing
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="invoice_template.html" className="nav-link">
                            Invoice template
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="invoice_grid.html" className="nav-link">
                            Invoice grid
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="invoice_archive.html" className="nav-link">
                            Invoice archive
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Authentication
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="login_simple.html" className="nav-link">
                            Simple login
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_advanced.html" className="nav-link">
                            More login info
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_registration.html" className="nav-link">
                            Simple registration
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="login_registration_advanced.html"
                            className="nav-link"
                          >
                            More registration info
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_unlock.html" className="nav-link">
                            Unlock user
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="login_password_recover.html"
                            className="nav-link"
                          >
                            Reset password
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_hide_navbar.html" className="nav-link">
                            Hide navbar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_transparent.html" className="nav-link">
                            Transparent box
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_background.html" className="nav-link">
                            Background option
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_validation.html" className="nav-link">
                            With validation
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_tabbed.html" className="nav-link">
                            Tabbed form
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_modals.html" className="nav-link">
                            Inside modals
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Error pages
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="error_403.html" className="nav-link">
                            Error 403
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="error_404.html" className="nav-link">
                            Error 404
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="error_405.html" className="nav-link">
                            Error 405
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="error_500.html" className="nav-link">
                            Error 500
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="error_503.html" className="nav-link">
                            Error 503
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="error_offline.html" className="nav-link">
                            Offline page
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-user-focus" />
                    <span>User pages</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="user_pages_list.html" className="nav-link">
                        User list
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="user_pages_cards.html" className="nav-link">
                        User cards
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="user_pages_profile.html" className="nav-link">
                        Simple profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="user_pages_profile_tabbed.html" className="nav-link">
                        Tabbed profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="user_pages_profile_cover.html" className="nav-link">
                        Profile with cover
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-circles-four" />
                    <span>Application pages</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Task manager
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="task_manager_grid.html" className="nav-link">
                            Task grid
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="task_manager_list.html" className="nav-link">
                            Task list
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="task_manager_detailed.html" className="nav-link">
                            Task detailed
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Inbox
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="mail_list.html" className="nav-link">
                            Mail list
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="mail_list_detached.html" className="nav-link">
                            Mail list (detached)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="mail_read.html" className="nav-link">
                            Read mail
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="mail_write.html" className="nav-link">
                            Write mail
                          </a>
                        </li>
                        <li className="nav-item-divider" />
                        <li className="nav-item">
                          <a href="chat_layouts.html" className="nav-link">
                            Chat layouts
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="chat_options.html" className="nav-link">
                            Chat options
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Search
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="search_basic.html" className="nav-link">
                            Basic search results
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="search_users.html" className="nav-link">
                            User search results
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="search_images.html" className="nav-link">
                            Image search results
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="search_videos.html" className="nav-link">
                            Video search results
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Job search
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="job_list_cards.html" className="nav-link">
                            Cards view
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="job_list_list.html" className="nav-link">
                            List view
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="job_detailed.html" className="nav-link">
                            Job detailed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="job_apply.html" className="nav-link">
                            Apply
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Learning
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="learning_list.html" className="nav-link">
                            List view
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="learning_grid.html" className="nav-link">
                            Grid view
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="learning_detailed.html" className="nav-link">
                            Detailed course
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Ecommerce set
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="ecommerce_product_list.html"
                            className="nav-link"
                          >
                            Product list
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ecommerce_product_grid.html"
                            className="nav-link"
                          >
                            Product grid
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ecommerce_orders_history.html"
                            className="nav-link"
                          >
                            Orders history
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="ecommerce_customers.html" className="nav-link">
                            Customers
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="ecommerce_pricing.html" className="nav-link">
                            Pricing tables
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-gift" />
                    <span>Widgets</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="widgets_content.html" className="nav-link">
                        Content widgets
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="widgets_stats.html" className="nav-link">
                        Statistics widgets
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="widgets_menu.html" className="nav-link disabled">
                        Menu widgets{" "}
                        <span className="badge bg-transparent align-self-center ms-auto">
                          Coming soon
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="widgets_form.html" className="nav-link disabled">
                        Form widgets{" "}
                        <span className="badge bg-transparent align-self-center ms-auto">
                          Coming soon
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
    </>
  )
}