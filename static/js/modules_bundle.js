function box_view(){$(document).ready(function(){$(".post .title").ellipsis();$(".box_view").masonry({itemSelector:".post",columnWidth:270,gutterWidth:30,isAnimated:true})})}function hackpad_form(){$(function(){var link_form=$(".link_hackpad_url");link_form.hide();var modify_form=$("#modify_hackpad_url");modify_form.val(link_form.val());modify_form.keyup(function(e){$("#hackpad_iframe").attr("src",$(this).val())})})}function link_form(){$(function(){$(".link_form input[type=checkbox]").each(function(i,o){var checkbox=$(this);var label=$(".link_form label[for='"+checkbox.attr("id")+"']");var label_unselected=label.html();var label_selected=label.attr("data-selected");label.remove();checkbox.hide();var button='<button type="button" data-toggle="button" class="btn btn-large btn-block check_button" '+'id="'+checkbox.attr("id")+'_button">';button+=label_unselected;button+="</button>";button=$(button);if(checkbox.attr("checked")){button.addClass("active");button.html(label_selected)}button.on("click",function(e){if(checkbox.attr("checked")){checkbox.attr("checked",false).change();button.html(label_unselected)}else{checkbox.attr("checked",true).change();button.html(label_selected)}});$(this).after(button)});$("").on("click",function(e){if(checkbox.attr("checked")){checkbox.attr("checked",false).change();button.html(label_unselected)}else{checkbox.attr("checked",true).change();button.html(label_selected)}});$("#link_has_hackpad_button").on("click",function(e){var choice=$('input[name="hackpad_type"]:checked').prop("checked",false);$("#hackpad_modal").modal();e.stopPropagation()});$("#save_hackpad_btn").on("click",function(e){alert(choice)});$(".link_body_raw").tinymce({script_url:"/static/js/tiny_mce/tiny_mce.js",theme:"advanced",plugins:"autoresize,autolink,lists,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,advlist",width:"100%",theme_advanced_buttons1:"bold,italic,underline,strikethrough,|,bullist,numlist,blockquote,pagebreak,|,link,unlink,image,|"+"|,iespell,media,emotions,|,fullscreen",theme_advanced_resizing:true,theme_advanced_toolbar_align:"center",theme_advanced_statusbar_location:"none",content_css:"/static/css/tinymce_content.css",template_external_list_url:"lists/template_list.js",external_link_list_url:"lists/link_list.js",external_image_list_url:"lists/image_list.js",media_external_list_url:"lists/media_list.js"})})}function nav_bar(){$(function(){$("#account_settings_btn").click(function(e){$("#user_modal").modal("show");e.stopPropagation()});$("#navigation_button").click(function(e){$("#navigation_button").toggleClass("active");$("#navigation_items").collapse("toggle")})})}function vote_button(){$(function(){$(".vote_button").on("click",function(e){window.location=$(this).closest(".vote_button").children("li").children("a").attr("href");e.stopPropagation()})})}

