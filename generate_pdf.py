import os
import sys

def install_and_import():
    try:
        from fpdf import FPDF
    except ImportError:
        import subprocess
        print("fpdf2 not found. Installing via pip...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "fpdf2"])
        from fpdf import FPDF
    return FPDF

FPDF = install_and_import()

class BionicsPDF(FPDF):
    def header(self):
        if self.page_no() > 1:
            self.set_font('Helvetica', 'I', 9)
            self.set_text_color(100, 110, 120)
            self.cell(0, 10, 'Aether Bionics | AI Usage Declaration & Deliverables', 0, 0, 'L')
            self.cell(0, 10, 'July 2026', 0, 0, 'R')
            self.ln(10)
            self.draw_line()
            self.ln(5)

    def footer(self):
        self.set_y(-15)
        self.draw_line()
        self.set_font('Helvetica', 'I', 8)
        self.set_text_color(120, 130, 140)
        self.cell(0, 10, 'Aether Bionics Inc. - Confidential', 0, 0, 'L')
        self.cell(0, 10, f'Page {self.page_no()}', 0, 0, 'R')

    def draw_line(self):
        self.set_draw_color(200, 210, 220)
        self.set_line_width(0.2)
        self.line(10, self.get_y(), 200, self.get_y())

    def title_section(self):
        self.set_fill_color(8, 10, 15)
        self.rect(0, 0, 210, 85, 'F')
        
        self.set_xy(15, 20)
        self.set_font('Helvetica', 'B', 28)
        self.set_text_color(0, 240, 255) # Cyber Cyan
        self.cell(0, 15, 'AETHER BIONICS', 0, 0)
        self.ln(15)
        
        self.set_font('Helvetica', 'B', 16)
        self.set_text_color(217, 70, 239) # Violet/Magenta
        self.cell(0, 10, 'AI Usage Declaration & Technical Overview', 0, 0)
        self.ln(10)
        
        self.set_font('Helvetica', '', 10)
        self.set_text_color(200, 200, 200)
        self.cell(0, 10, 'Landing Page Deliverables - Web Development Internship Submission', 0, 0)
        self.ln(10)
        
        self.set_xy(15, 60)
        self.set_font('Helvetica', 'I', 9)
        self.set_text_color(150, 150, 150)
        self.cell(0, 5, 'Date: July 15, 2026', 0, 0)
        self.ln(5)
        self.cell(0, 5, 'Author: Intern Candidate & Antigravity AI Pair Programming', 0, 0)
        self.ln(5)
        
        self.set_xy(10, 95)

def parse_markdown_to_pdf(md_path, pdf_path):
    pdf = BionicsPDF(orientation='P', unit='mm', format='A4')
    pdf.set_margins(15, 15, 15)
    pdf.add_page()
    pdf.title_section()
    
    with open(md_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    in_table = False
    table_rows = []
    
    for line in lines:
        # Standardize Unicode strings to ASCII for Helvetica FPDF core font compatibility
        line_str = line.strip()
        line_str = (line_str
                    .replace('\u2014', '-')   # em dash
                    .replace('\u2013', '-')   # en dash
                    .replace('\u2018', "'")   # curly single quote left
                    .replace('\u2019', "'")   # curly single quote right
                    .replace('\u201c', '"')   # curly double quote left
                    .replace('\u201d', '"')   # curly double quote right
                    .replace('&amp;', '&')
                    .replace('\u2022', '-')   # bullet character
                    .replace('\u2122', 'TM')  # Trademark
                    .replace('\u00ae', '(R)') # Registered
                    .replace('\u00b2', '2')   # Superscript 2
                   )
        
        if not line_str:
            if not in_table:
                pdf.ln(3)
            continue
            
        # Ignore main H1 since we drew it on the title band
        if line_str.startswith('# ') and 'Aether Bionics' in line_str:
            continue
            
        # Handle table
        if line_str.startswith('|'):
            in_table = True
            table_rows.append(line_str)
            continue
        elif in_table:
            # End of table
            render_pdf_table(pdf, table_rows)
            in_table = False
            table_rows = []
            pdf.ln(5)

        # Headings
        if line_str.startswith('## '):
            pdf.ln(6)
            pdf.set_font('Helvetica', 'B', 14)
            pdf.set_text_color(8, 20, 40)
            pdf.cell(0, 10, line_str[3:], 0, 0)
            pdf.ln(10)
            pdf.set_draw_color(0, 240, 255)
            pdf.set_line_width(0.5)
            pdf.line(pdf.get_x(), pdf.get_y(), pdf.get_x() + 40, pdf.get_y())
            pdf.ln(4)
        elif line_str.startswith('### '):
            pdf.ln(4)
            pdf.set_font('Helvetica', 'B', 11)
            pdf.set_text_color(50, 60, 70)
            pdf.cell(0, 8, line_str[4:], 0, 0)
            pdf.ln(9)
        # Bullet list items
        elif line_str.startswith('- '):
            pdf.set_font('Helvetica', '', 10)
            pdf.set_text_color(60, 70, 80)
            bullet = "-"
            text = line_str[2:]
            
            # Check bold segments
            if '**' in text:
                parts = text.split('**')
                pdf.write(5, f"  {bullet}  ")
                for idx, part in enumerate(parts):
                    if idx % 2 == 1:
                        pdf.set_font('Helvetica', 'B', 10)
                        pdf.write(5, part)
                    else:
                        pdf.set_font('Helvetica', '', 10)
                        pdf.write(5, part)
                pdf.ln(6)
            else:
                pdf.multi_cell(0, 5, f"  {bullet}  {text}")
                pdf.ln(1)
        # Standard paragraphs
        else:
            pdf.set_font('Helvetica', '', 10)
            pdf.set_text_color(60, 70, 80)
            
            # Handle bold segments in paragraphs
            if '**' in line_str:
                parts = line_str.split('**')
                for idx, part in enumerate(parts):
                    if idx % 2 == 1:
                        pdf.set_font('Helvetica', 'B', 10)
                        pdf.write(5, part)
                    else:
                        pdf.set_font('Helvetica', '', 10)
                        pdf.write(5, part)
                pdf.ln(6)
            else:
                pdf.multi_cell(0, 5.5, line_str)
                pdf.ln(2)

    # In case document ended on table
    if in_table and table_rows:
        render_pdf_table(pdf, table_rows)
        
    # Append the Drive deliverable link statement
    pdf.ln(10)
    pdf.set_font('Helvetica', 'B', 12)
    pdf.set_text_color(217, 70, 239)
    pdf.cell(0, 10, 'Google Drive Submission Links:', 0, 0)
    pdf.ln(10)
    pdf.set_font('Helvetica', '', 10)
    pdf.set_text_color(40, 50, 60)
    
    pdf.multi_cell(0, 5, "Please refer to the candidate's actual Google Drive submission links. The codebase is organized within the local workspace under '/scratch/bionics-landing-page', containing the complete production React + Vite components and custom CSS styling.")
    pdf.ln(5)

    pdf.output(pdf_path)
    print(f"PDF generated successfully at {pdf_path}")

def render_pdf_table(pdf, rows):
    pdf.set_font('Helvetica', '', 9)
    # Filter separator lines (contain ---)
    valid_rows = [r for r in rows if '---' not in r]
    
    # We expect 3 columns
    col_widths = [45, 65, 70]
    
    for row_idx, row in enumerate(valid_rows):
        cells = [c.strip() for c in row.split('|')[1:-1]]
        
        # Check alignment and heights
        is_header = (row_idx == 0)
        if is_header:
            pdf.set_fill_color(230, 240, 250)
            pdf.set_text_color(20, 30, 40)
            pdf.set_font('Helvetica', 'B', 9)
        else:
            pdf.set_fill_color(255, 255, 255)
            pdf.set_text_color(60, 70, 80)
            pdf.set_font('Helvetica', '', 9)
            
        # Draw cells
        x_start = pdf.get_x()
        y_start = pdf.get_y()
        max_height = 8
        
        # Determine cell heights
        for col_idx, cell in enumerate(cells):
            width = col_widths[col_idx] if col_idx < len(col_widths) else 50
            lines = pdf.multi_cell(width, 5, cell, split_only=True)
            height = len(lines) * 5 + 3
            if height > max_height:
                max_height = height
                
        # Actually draw the row
        for col_idx, cell in enumerate(cells):
            width = col_widths[col_idx] if col_idx < len(col_widths) else 50
            pdf.set_xy(x_start, y_start)
            # Add backgrounds
            pdf.cell(width, max_height, '', border=1, fill=True)
            pdf.set_xy(x_start, y_start + 1.5)
            pdf.multi_cell(width, 4.5, cell, align='L', border=0)
            x_start += width
            
        pdf.set_xy(15, y_start + max_height)

if __name__ == '__main__':
    md_file = 'ai_declaration.md'
    pdf_file = 'ai_usage.pdf'
    if not os.path.exists(md_file):
        md_file = os.path.join(os.path.dirname(__file__), md_file)
        pdf_file = os.path.join(os.path.dirname(__file__), pdf_file)
        
    parse_markdown_to_pdf(md_file, pdf_file)
