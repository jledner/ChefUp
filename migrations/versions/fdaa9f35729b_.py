"""empty message

Revision ID: fdaa9f35729b
Revises: c99421a66bf7
Create Date: 2022-04-02 13:09:57.343670

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fdaa9f35729b'
down_revision = 'c99421a66bf7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'favorites')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('favorites', sa.VARCHAR(), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
