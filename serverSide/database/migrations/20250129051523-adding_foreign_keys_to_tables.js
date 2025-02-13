'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.addConstraint('space_invitations', {
            fields: ['user_id'],
            type: 'foreign key',
            name: 'fk_space_invitations_user_id', // Unique constraint name
            references: {
                table: 'users',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('space_invitations', {
            fields: ['inviter_id'],
            type: 'foreign key',
            name: 'fk_space_invitations_inviter_id',
            references: {
                table: 'users',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('spaces', {
            fields: ['owner_id'],
            type: 'foreign key',
            name: 'fk_spaces_owner_id',
            references: {
                table: 'users',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('interests', {
            fields: ['user_id'],
            type: 'foreign key',
            name: 'fk_interests_user_id',
            references: {
                table: 'users',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('characteristics', {
            fields: ['user_id'],
            type: 'foreign key',
            name: 'fk_characteristics_user_id',
            references: {
                table: 'users',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('user_online_activity', {
            fields: ['user_id'],
            type: 'foreign key',
            name: 'fk_user_online_activity_user_id',
            references: {
                table: 'users',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('users', {
            fields: ['theme_id'],
            type: 'foreign key',
            name: 'fk_users_theme_id',
            references: {
                table: 'themes',
                field: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('users', {
            fields: ['color_id'],
            type: 'foreign key',
            name: 'fk_users_color_id',
            references: {
                table: 'colors',
                field: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('roles', {
            fields: ['space_id'],
            type: 'foreign key',
            name: 'fk_roles_space_id',
            references: {
                table: 'spaces',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('space_invitations', {
            fields: ['space_id'],
            type: 'foreign key',
            name: 'fk_space_invitations_space_id',
            references: {
                table: 'spaces',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('role_permissions', {
            fields: ['role_id'],
            type: 'foreign key',
            name: 'fk_role_permissions_role_id',
            references: {
                table: 'roles',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('chats', {
            fields: ['chat_type_id'],
            type: 'foreign key',
            name: 'fk_chats_chat_type_id',
            references: {
                table: 'chat_types',
                field: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('messages', {
            fields: ['chat_id'],
            type: 'foreign key',
            name: 'fk_messages_chat_id',
            references: {
                table: 'chats',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('messages', {
            fields: ['forwarded_from_chat_id'],
            type: 'foreign key',
            name: 'fk_messages_forwarded_from_chat_id',
            references: {
                table: 'chats',
                field: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('message_reactions', {
            fields: ['message_id'],
            type: 'foreign key',
            name: 'fk_message_reactions_message_id',
            references: {
                table: 'messages',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('messages', {
            fields: ['response_to_message_id'],
            type: 'foreign key',
            name: 'fk_messages_response_to_message_id',
            references: {
                table: 'messages',
                field: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('chats', {
            fields: ['creator_id'],
            type: 'foreign key',
            name: 'fk_chats_creator_id',
            references: {
                table: 'users',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('message_reactions', {
            fields: ['user_id'],
            type: 'foreign key',
            name: 'fk_message_reactions_user_id',
            references: {
                table: 'users',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('message_reactions', {
            fields: ['reaction_type_id'],
            type: 'foreign key',
            name: 'fk_message_reactions_reaction_type_id',
            references: {
                table: 'reaction_types',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('messages', {
            fields: ['sender_id'],
            type: 'foreign key',
            name: 'fk_messages_sender_id',
            references: {
                table: 'users',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('message_attached_files', {
            fields: ['message_id'],
            type: 'foreign key',
            name: 'fk_message_attached_files_message_id',
            references: {
                table: 'messages',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('notifications', {
            fields: ['type_id'],
            type: 'foreign key',
            name: 'fk_notifications_type_id',
            references: {
                table: 'notification_types',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('posts', {
            fields: ['space_id'],
            type: 'foreign key',
            name: 'fk_posts_space_id',
            references: {
                table: 'spaces',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('post_attached_images', {
            fields: ['post_id'],
            type: 'foreign key',
            name: 'fk_post_attached_images_post_id',
            references: {
                table: 'posts',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('post_likes', {
            fields: ['post_id'],
            type: 'foreign key',
            name: 'fk_post_likes_post_id',
            references: {
                table: 'posts',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('post_comments', {
            fields: ['post_id'],
            type: 'foreign key',
            name: 'fk_post_comments_post_id',
            references: {
                table: 'posts',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('post_likes', {
            fields: ['user_id'],
            type: 'foreign key',
            name: 'fk_post_likes_user_id',
            references: {
                table: 'users',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });

        await queryInterface.addConstraint('post_comments', {
            fields: ['user_id'],
            type: 'foreign key',
            name: 'fk_post_comments_user_id',
            references: {
                table: 'users',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });
    },

    down: async () => {
        await queryInterface.removeConstraint('space_invitations', 'fk_space_invitations_user_id');
        await queryInterface.removeConstraint('space_invitations', 'fk_space_invitations_inviter_id');
        await queryInterface.removeConstraint('spaces', 'fk_spaces_owner_id');
        await queryInterface.removeConstraint('interests', 'fk_interests_user_id');
        await queryInterface.removeConstraint('characteristics', 'fk_characteristics_user_id');
        await queryInterface.removeConstraint('user_online_activity', 'fk_user_online_activity_user_id');
        await queryInterface.removeConstraint('users', 'fk_users_theme_id');
        await queryInterface.removeConstraint('users', 'fk_users_color_id');
        await queryInterface.removeConstraint('roles', 'fk_roles_space_id');
        await queryInterface.removeConstraint('space_invitations', 'fk_space_invitations_space_id');
        await queryInterface.removeConstraint('role_permissions', 'fk_role_permissions_role_id');
        await queryInterface.removeConstraint('chats', 'fk_chats_chat_type_id');
        await queryInterface.removeConstraint('messages', 'fk_messages_chat_id');
        await queryInterface.removeConstraint('messages', 'fk_messages_forwarded_from_chat_id');
        await queryInterface.removeConstraint('message_reactions', 'fk_message_reactions_message_id');
        await queryInterface.removeConstraint('messages', 'fk_messages_response_to_message_id');
        await queryInterface.removeConstraint('chats', 'fk_chats_creator_id');
        await queryInterface.removeConstraint('message_reactions', 'fk_message_reactions_user_id');
        await queryInterface.removeConstraint('message_reactions', 'fk_message_reactions_reaction_type_id');
        await queryInterface.removeConstraint('messages', 'fk_messages_sender_id');
        await queryInterface.removeConstraint('message_attached_files', 'fk_message_attached_files_message_id');
        await queryInterface.removeConstraint('notifications', 'fk_notifications_type_id');
        await queryInterface.removeConstraint('posts', 'fk_posts_space_id');
        await queryInterface.removeConstraint('post_attached_images', 'fk_post_attached_images_post_id');
        await queryInterface.removeConstraint('post_likes', 'fk_post_likes_post_id');
        await queryInterface.removeConstraint('post_comments', 'fk_post_comments_post_id');
        await queryInterface.removeConstraint('post_likes', 'fk_post_likes_user_id');
        await queryInterface.removeConstraint('post_comments', 'fk_post_comments_user_id');
    },
};
