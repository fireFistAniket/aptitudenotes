export const topicObj = [
  {
    id: 1,
    title: "CODED INEQUALITY",
    data: `<figure class="figure">
    <div class="figure-img rounded container">
      <p>Basic => &lt;,&gt;,=</p>
      <p>Derived => &lt;=,&gt;=,!=</p>
      <p>A &gt; B => B &lt; A</p>
      <p>A &lt; B => B &gt; A</p>
      <p>A &gt;= B => B &lt;= A</p>
      <p>A &lt;= B => B &gt;= A</p>
      <p>(A &gt; B)' => A &lt;= B</p>
      <p>(A &lt; B)' => A &gt;= B</p>
      <p>(A &lt;= B)' => A &lt; B</p>
      <p>A &gt;= B &gt;= C => A &gt;= C</p>
      <p>A &gt; B &gt; C => A &gt; C</p>
      <p>
        A &gt;= B &gt;= C &gt; D &lt; E => we can not predict relation
        between A & E
      </p>
      <div class="container">
        <h3>Example :</h3>
        <p>[G &lt;= R &gt; E = A &lt;= T] which is correct?</p>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="answer"
            id="R&gt;T"
          />
          <label class="form-check-label" for="R&gt;T"> R&gt;T </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="answer"
            id="R=A"
          />
          <label class="form-check-label" for="R=A"> R=A </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="answer"
            id="G&lt;=T"
          />
          <label class="form-check-label" for="G&lt;=T"> G&lt;=T </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="answer"
            id="E&lt;=T"
          />
          <label class="form-check-label" for="E&lt;=T"> E&lt;=T </label>
        </div>
      </div>
      <div class="container p-3">
        <h3 style="display: inline">Answer:</h3>
        <p class="d-inline mx-3">option 4</p>
      </div>
      <div class="p-3">
        <h3>Explaination :</h3>
        <p>
          In option 1 there are no common relation between R & T Hence
          it's wrong. In option 2 R is not equal with A because, E is
          equal to A & R is greater than E hence it's also wrong. In
          option 3 There are some letters between G & T, & also not every
          symbol is common hence it's wrong also. Then option 4 is left
          only & also there are common symbol "=" present between E & T,
          hence it's the right answer
        </p>
      </div>
    </div>
    <figcaption class="figure-caption text-end">
      <b id="title"> CODED INEQUALITY</b>
    </figcaption>
  </figure>`,
  },
  {
    id: 2,
    title: "DIRECTION",
    data: `<figure class="figure">
    <div class="figure-img rounded container">
      <div class="formula">
        <p style="font-size: 240px">+</p>
        <span>East</span><span>West</span><span>North</span
        ><span>South</span>
        <div id="direction_formula_text">
          <p>
            If it is in the same direction, then add them
            <code>E+E+E+E+....</code> or <code>W+W+W+W+W+W+....</code>
          </p>
          <p>
            If it is in opposite direction, then substract them
            <code>E-W</code><code>N-S</code><code>S-N</code><code>W-E</code>
          </p>
          <p>
            If direction asked from starting position or initial position or
            original position, then direction is obtained answer only
          </p>
          <p>
            If direction asked from final position or end position or from
            reached position, then direction is opposite of obtained answer
          </p>
          <p>
            In morning hours after sunrise our shadow falls towards west
            direction
          </p>
          <p>
            In evening hours before sunset our shadow falls towards east
            direction
          </p>
        </div>
      </div>
      <div class="example py-3">
        <h3>Example:</h3>
        <p>
          A man toward east and covers a distance of 40 meter, then turns
          north & cover 50 meter, then turns west & cover 40 meter, then
          turns north again & cover 50 meter. How far is he now from
          starting position
        </p>
      </div>
      <div class="answer p-3">
        <h3 style="display: inline">Answer:</h3>
        <span style="padding: 0px 17px; color: brown">100 meter South</span>
        <h3>Explaination :</h3>
        <div class="container p-3">
          <img
            src="assets/direction_example_diagram.png"
            alt=""
            height="150px"
            width="150px"
          />
        </div>
      </div>
      <div class="container p-3" id="explain_text">
        <p>
          1st draw the exceptable diagram and mark according to direction as
          you can see in above. Then calculate & apply basic geometric
        </p>
      </div>
    </div>
    <figcaption class="figure-caption text-end">
      <b>Direction</b>
    </figcaption>
  </figure>`,
  },
  {
    id: 3,
    title: "AGES",
    data: `<figure class="figure">
    <div class="figure-img rounded container">
      <div class="container py-3">
        <p>
          If present age is <code>X</code> & past/earlier/before age
          <code>15 years</code> ,Hence it's mean <code>X-15 years</code>
        </p>
        <p>
          If present age is <code>X</code> & future/hence/after age
          <code>15 years</code> ,Hence it's mean <code>X+15 years</code>
        </p>
        <p><b>Future</b>=><code>+</code></p>
        <p><b>Past</b>=><code>-</code></p>
        <p><b>Times</b>=><code>*</code></p>
        <div class="py-3" id="basic_example">
          <p>
            5 years later father's age will be twice of son's age =>
            <code>F+5 = 2(S+5)</code>
          </p>
          <p>
            5 years later father's age will be twice of son's current age
            => <code>F+5 = 2S</code>
          </p>
          <p>
            5 years ago father's age was be twice of son's age =>
            <code>F-5 = 2(S+5)</code>
          </p>
          <p>
            5 years ago father's age was be twice of son's current age =>
            <code>F-5 = 2S</code>
          </p>
        </div>
      </div>
      <div class="container py-3">
        <h3>Example :</h3>
        <p>
          A's age after 15 years will be 5 times of his age before 5
          years. What is A's age now?
        </p>
      </div>
      <div class="p-3">
        <h3 style="display: inline">Answer:</h3>
      </div>
      <div class="container p-3">
        <h3>Explaination :</h3>
        <p>
          let A's current age is <code>X</code><br />
          now, according to question we can write =><br />
          <code>X+15 = 5(X-5)</code><br />
          <code>X+15 = 5X-25</code><br />
          <code>5X-X = 15+25</code><br />
          <code>4X = 40</code><br />
          <code>X = 10</code><br />
        </p>
        <p>So, answer is A's current age is 10 years</p>
      </div>
    </div>
    <figcaption class="figure-caption text-end">
      <b>AGES</b>
    </figcaption>
  </figure>`,
  },
  {
    id: 4,
    title: "CODING AND DECODING",
    data: `<figure class="figure">
    <div class="figure-img rounded container">
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Letter</th>
              <th scope="col">Count Ascending</th>
              <th scope="col">Count Descending</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>1</td>
              <td>26</td>
            </tr>
            <tr>
              <td>B</td>
              <td>2</td>
              <td>25</td>
            </tr>
            <tr>
              <td>C</td>
              <td>3</td>
              <td>24</td>
            </tr>
            <tr>
              <td>D</td>
              <td>4</td>
              <td>23</td>
            </tr>
            <tr>
              <td>E</td>
              <td>5</td>
              <td>22</td>
            </tr>
            <tr>
              <td>F</td>
              <td>6</td>
              <td>21</td>
            </tr>
            <tr>
              <td>G</td>
              <td>7</td>
              <td>20</td>
            </tr>
            <tr>
              <td>H</td>
              <td>8</td>
              <td>19</td>
            </tr>
            <tr>
              <td>I</td>
              <td>9</td>
              <td>18</td>
            </tr>
            <tr>
              <td>J</td>
              <td>10</td>
              <td>17</td>
            </tr>
            <tr>
              <td>K</td>
              <td>11</td>
              <td>16</td>
            </tr>
            <tr>
              <td>L</td>
              <td>12</td>
              <td>15</td>
            </tr>
            <tr>
              <td>M</td>
              <td>13</td>
              <td>14</td>
            </tr>
            <tr>
              <td>N</td>
              <td>14</td>
              <td>13</td>
            </tr>
            <tr>
              <td>O</td>
              <td>15</td>
              <td>12</td>
            </tr>
            <tr>
              <td>P</td>
              <td>16</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Q</td>
              <td>17</td>
              <td>10</td>
            </tr>
            <tr>
              <td>R</td>
              <td>18</td>
              <td>9</td>
            </tr>
            <tr>
              <td>S</td>
              <td>19</td>
              <td>8</td>
            </tr>
            <tr>
              <td>T</td>
              <td>20</td>
              <td>7</td>
            </tr>
            <tr>
              <td>U</td>
              <td>21</td>
              <td>6</td>
            </tr>
            <tr>
              <td>V</td>
              <td>22</td>
              <td>5</td>
            </tr>
            <tr>
              <td>W</td>
              <td>23</td>
              <td>4</td>
            </tr>
            <tr>
              <td>X</td>
              <td>24</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Y</td>
              <td>25</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Z</td>
              <td>26</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
        <div class="py-5">
          <p>
            For &nbsp;<span style="text-decoration: underline"
              >fill in the blanks</span
            >&nbsp; type of questions do not go from options, it might
            confuse. Count the numbers of letters and compare them
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <h3>Example :</h3>
      <p>
        In a certain language if &nbsp;<code>SUNSHINE</code>&nbsp; is
        coded as &nbsp;<code>TUOTIJOF</code>&nbsp; then how will
        &nbsp;<code>MOON</code>&nbsp; be coded?
      </p>
    </div>
    <div class="container p-3">
      <h3 style="display: inline">Answer:</h3>
      <code class="mx-2">NPPO</code>
    </div>
    <div class="p-3">
      <h3>Explaination :</h3>
      <p>
          For word <code>SUNSHINE</code><br>
          <p>S-T</p>
          <p>U-V</p>
          <p>N-O</p>
          <p>S-T</p>
          <p>H-I</p>
          <p>I-J</p>
          <p>N-O</p>
          <p>E-F</p> 
      </p>
      <p>
          so then,
          <p>M-N</p>
          <p>O-P</p>
          <p>O-P</p>
          <p>N-O</p>
      </p>
    </div>
    <figcaption class="figure-caption text-end">
      <b>CODING AND DECODING</b>
    </figcaption>
  </figure>`,
  },
  {
    id: 5,
    title: "NUMBER SERIES",
    data: `<figure class="figure">
    <div class="figure-img rounded container">
      <div class="container">
        <div class="py-5">
          <p>
            For number series questions we should check the difference
            between numbers. We briefly explain with example below.
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <h3>Example :</h3>
      <p>2, 6, 12, 20, 30, 42, 56, ?</p>
    </div>
    <div class="container p-3">
      <h3 style="display: inline">Answer:</h3>
      <code class="mx-2">72</code>
    </div>
    <div class="p-3">
      <h3>Explaination :</h3>
      <p>
        The pattern is <br />
        1 x 2 <br />
        2 x 3 <br />
        3 x 4 <br />
        4 x 5 <br />
        5 x 6 <br />
        6 x 7 <br />
        7 x 8 <br />
        So, the next number is 8 x 9 = 72.
      </p>
    </div>
    <figcaption class="figure-caption text-end">
      <b>NUMBER SERIES</b>
    </figcaption>
  </figure>`,
  },
  {
    id: 6,
    title: "DIVISIBILTY RULES",
    data: `<figure class="figure">
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Divider Number</th>
            <th scope="col">description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2</td>
            <td>last digit should be even number</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              Sum of digits of divisible number should be divisible by 3
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              2<sup>2</sup>&nbsp; last 2 digits is <code>00</code>&nbsp;
              or should be divisible by 4
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              last digit should be&nbsp;<code>0</code>&nbsp;or&nbsp;<code
                >5</code
              >
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <code>2*3</code>&nbsp;number should be divisible by both 2 &
              3
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              cross off last 2 digit, doble it & substract. Repeat if you
              want. If new number is divisible by 7 then original number
              is divisible by 7 or Unit digit of the number multiply by 5
              and add remaining part of number if new number is divisible
              by 7 then original number is divisible by 7. <br />
              <code
                ><span>3983</span>&nbsp;<span>398+(3*5)</span>&nbsp;<span
                  >41+(3*5)</span
                ></code
              >
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              2<sup>3</sup>&nbsp; last 3 digits should
              be&nbsp;<code>000</code>&nbsp;or should be divisible by 8
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              Sum of digits of divisible number should be divisible by 9
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>last digit should be 0</td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              (sum of even digits place numbers) - (sum of odd digits
              place numbers) = 0 or should be divisible by 11
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="example py-3">
      <h3>Example:</h3>
      <p>
        What is the largest 4 digits number which exactly divisible by 88?
      </p>
    </div>
    <div class="answer p-3">
      <h3 style="display: inline">Answer:</h3>
      <span style="padding: 0px 17px; color: brown">9944</span>
      <h3>Explaination :</h3>
    </div>
    <div class="container p-3" id="explain_text">
      <p>
        The largest 4 digits number = 9999.If we divide by 88 then we got
        55. If we substract 55 from 9999 we got 9944, which is completely
        divisible by 88
      </p>
    </div>
    <figcaption class="figure-caption text-end">
      <b>DIVISIBILTY RULES</b>
    </figcaption>
  </figure>`,
  },
  {
    id: 7,
    title: "BLOOD RELATION",
    data: `<figure class="figure">
    <div class="container">
      <img src="assets/blood_relation_diagram.png" alt="" />
      <p>Family Tree Diagram</p>
    </div>
    <div class="py-3">
      <div class="d-block">
        <h3>Symbols</h3>
        <img src="assets/blood_relation_symbols.png" alt="" />
      </div>
      <div class="d-flex text-center">
        <figure class="figure">
          <img
            src="assets/A_father_B.png"
            class="figure-img img-fluid rounded"
            alt="..."
          />
          <figcaption class="figure-caption">A is father of B</figcaption>
        </figure>
        <figure class="figure">
          <img
            src="assets/A_brother_B.png"
            class="figure-img img-fluid rounded"
            alt="..."
          />
          <figcaption class="figure-caption">
            A is brother of B
          </figcaption>
        </figure>
        <figure class="figure">
          <img
            src="assets/A_wife_B.png"
            class="figure-img img-fluid rounded"
            alt="..."
            width="350px"
          />
          <figcaption class="figure-caption">A is wife of B</figcaption>
        </figure>
        <figure class="figure">
          <img
            src="assets/A_son_B.png"
            class="figure-img img-fluid rounded"
            alt="..."
          />
          <figcaption class="figure-caption">A is son of B</figcaption>
        </figure>
        <figure class="figure">
          <img
            src="assets/A_grandson_B.png"
            class="figure-img img-fluid rounded"
            alt="..."
          />
          <figcaption class="figure-caption">
            A is grandson of B
          </figcaption>
        </figure>
      </div>
      <div class="container py-3">
        <h3 class="text-center text-decoration-underline">
          Generation Gap
        </h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Relation</th>
              <th scope="col">Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brother and Sister</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Husband and Wife</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Father and Mother</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Uncle and Aunt</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Grand Father and Grand Mother</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Son and Daughter</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Grand Son and Grand Daughter</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="example py-3">
      <h3>Example:</h3>
      <p>
        A * B = A is sister of B <br />
        A + B = A is mother of B <br />
        A / B = A is father of B <br />
        A - B = A is brother of B
      </p>
      <p>[P * Q / R - S + T] then the relation between P & T is?</p>
    </div>
    <div class="answer p-3">
      <h3 style="display: inline">Answer:</h3>
      <span style="padding: 0px 17px; color: brown">Grand Aunt</span>
      <h3>Explaination :</h3>
    </div>
    <div class="container p-3" id="explain_text">
      <p>
        1st check the gender & eliminate few options, then find the
        generation gap and eliminate options. If it does not work then go
        for tree diagram. In this question "*" symbol represents the
        relation as sister, then gender of P is woman. Also there is "/"
        symbol which represents the relation as "father" then answer is
        Grand Aunt.
      </p>
    </div>
    <figcaption class="figure-caption text-end">
      <b>BLOOD RELATION</b>
    </figcaption>
  </figure>`,
  },
  {
    id: 8,
    title: "RATIOS AND PROPORTION",
    data: `<figure class="figure">
    <div class="container">
      <h6 class="text-decoration-underline">Ratio:</h6>
      <p>
        The ratio of two
        quantities&nbsp;<code>a</code>&nbsp;and&nbsp;<code>b</code>&nbsp;in
        the same units, is the fraction
        <img
          src="https://www.indiabix.com/_files/images/aptitude/1-div-abyb.gif"
          alt=""
        />
        and we write it as&nbsp;<code>a : b</code>. In the
        ratio&nbsp;<code>a : b</code>, we call&nbsp;<code>a</code>&nbsp;as
        the first term or antecedent and&nbsp;<code>b</code>, the second
        term or consequent.
      </p>
      <h6 class="text-decoration-underline">Proportion:</h6>
      <p>
        If&nbsp;<code>a : b = c : d</code>, we write &nbsp;<code
          >a : b :: c : d</code
        >&nbsp; and we say that
        <code>a</code>,<code>b</code>,<code>c</code>,<code>d</code> are in
        proportion. Here <code>a</code> and <code>d</code> are called
        extremes, while <code>b</code> and <code>c</code> are called mean
        terms. Product of means = Product of extremes. Thus,
        <code>a : b :: c : d (b x c) = (a x d)</code>
      </p>
      <h6 class="text-decoration-underline">Fourth Proportional:</h6>
      <p>
        If <code>a : b = c : d</code>, then <code>d</code> is called the
        fourth proportional to <code>a</code>, <code>b</code>,
        <code>c</code>.
      </p>
      <h6 class="text-decoration-underline">Third Proportional:</h6>
      <p>
        <code>a : b = c : d</code>, then <code>c</code> is called the
        third proportion to <code>a</code> and <code>b</code>.
      </p>
      <h6 class="text-decoration-underline">Mean Proportional</h6>
      <p>
        Mean proportional between <code>a</code> and <code>b</code> is
        <code> &radic;ab</code>.
      </p>
      <h6 class="text-decoration-underline">Comparison of Ratios:</h6>
      <p>
        We say that (a : b) > (c : d)
        <img
          src="https://www.indiabix.com/_files/images/aptitude/1-sym-bim.gif"
          alt=""
        />
        <img
          src="https://www.indiabix.com/_files/images/aptitude/1-div-abyb.gif"
          alt=""
        />
        c . d The compounded ratio of the ratios: (a : b), (c : d), (e :
        f) is (ace : bdf).
      </p>
      <h6 class="text-decoration-underline">Compounded Ratio:</h6>
      <p>
        The compounded ratio of the ratios:
        <code>(a : b), (c : d), (e : f)</code> is
        <code>(ace : bdf)</code>.
      </p>
      <h6 class="text-decoration-underline">Duplicate Ratios:</h6>
      <p>
        Duplicate ratio of <code>(a : b)</code> is (a<sup>2</sup> :
        b<sup>2</sup>). Sub-duplicate ratio of
        <code>(a : b) is (a : b)</code>. Triplicate ratio of
        <code>(a : b) is (a<sup>3</sup> : b<sup>3</sup>)</code> .
        Sub-triplicate ratio of <code>(a : b)</code> is
        <code>(a<sup>1/3</sup> : b<sup>1/3</sup>)</code>. If
        <code>a = c</code> , then
        <img
          src="assets/abcdRelation.png"
          alt=""
          height="69"
          width="125"
        />. [componendo and dividendo]
      </p>
      <h6 class="text-decoration-underline">Variations:</h6>
      <p>
        We say that <code>x</code> is directly proportional to
        <code>y</code>, if <code>x = ky</code> for some constant
        <code>k</code> and we write, <code>x&prop;y</code>. We say that
        <code>x</code> is inversely proportional to <code>y</code>, if
        <code>xy = k</code> for some constant <code>k</code> and we write,
        <code>x&prop;1/y</code>
      </p>
      <div class="container">
        <h3>Question :</h3>
        <p>
          A sum of money is to be distributed among A, B, C, D in the
          proportion of 5 : 2 : 4 : 3. If C gets Rs. 1000 more than D,
          what is B's share?
        </p>
      </div>
    </div>
    <div class="answer p-3">
      <h3 style="display: inline">Answer:</h3>
      <span style="padding: 0px 17px; color: brown">Rs/- 2000</span>
      <h3>Explaination :</h3>
    </div>
    <div class="container p-3" id="explain_text">
      <p>
        Let the shares of A, B, C and D be Rs. 5x, Rs. 2x, Rs. 4x and Rs.
        3x respectively.<br />
        Then, 4x - 3x = 1000 <br />
        x = 1000. <br />
        B's share = Rs. 2x = Rs. (2 x 1000) = Rs. 2000.
      </p>
    </div>
    <figcaption class="figure-caption text-end">
      <b>RATIOS AND PROPORTION</b>
    </figcaption>
  </figure>`,
  },
  {
    id: 9,
    title: "PERCENTAGES",
    data: `<figure class="figure">
    <div class="container">
      <h3>percent => per + cent</h3>
      <p>Where per means each or 1 & cent means century or 100</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Fraction</th>
            <th scope="col">Decimel</th>
            <th scope="col">Percent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1/7</td>
            <td>0.14</td>
            <td>14%</td>
          </tr>
          <tr>
            <td>1/8</td>
            <td>0.125</td>
            <td>12.5%</td>
          </tr>
          <tr>
            <td>1/9</td>
            <td>0.11</td>
            <td>11%</td>
          </tr>
          <tr>
            <td>1/2</td>
            <td>0.5</td>
            <td>50%</td>
          </tr>
          <tr>
            <td>1/3</td>
            <td>0.33</td>
            <td>33%</td>
          </tr>
          <tr>
            <td>1/4</td>
            <td>0.25</td>
            <td>25%</td>
          </tr>
        </tbody>
      </table>
      <p>
        <code>X</code> is how much percent less or more than % is
        <code>[(X-Y)/Y]/100</code>
      </p>
      <p>
        percent change = <code>(actual change/initial value)*100</code>
      </p>
      <div class="container">
        <h3>Question :</h3>
        <p>
          wo students appeared at an examination. One of them secured 9
          marks more than the other and his marks was 56% of the sum of
          their marks. The marks obtained by them are:
        </p>
      </div>
    </div>
    <div class="answer p-3">
      <h3 style="display: inline">Answer:</h3>
      <span style="padding: 0px 17px; color: brown">42, 33</span>
      <h3>Explaination :</h3>
    </div>
    <div class="container p-3" id="explain_text">
      <p>
        Let their marks be <code>(x + 9)</code> and <code>X</code>.<br />
        Then, <code>x + 9 = 56 /100(x + 9 + x)</code> <br />
        <code>25(x + 9) = 14(2x + 9)</code> <br />
        <code>3x = 99</code> <br />
        <code>x = 33</code> <br />
        So, their marks are 42 and 33.
      </p>
    </div>
    <figcaption class="figure-caption text-end">
      <b>PERCENTAGES</b>
    </figcaption>
  </figure>`,
  },
  {
    id: 10,
    title: "PROFIT AND LOSS",
    data: `<figure class="figure">
    <div class="container">
      <p>Profit = Selling Price - Cost Price</p>
      <p>Loss = Cost Price - Selling Price</p>
      <p>%Profit = [(Selling Price - Cost Price)/Cost Price]*100</p>
      <p>%Loss = [(Cost Price - Selling Price)/Selling Price]*100</p>
      <p>If, %Selling Price &gt; 100 , then it is Profit</p>
      <p>If, %Selling Price &lt; 100 , then it is Loss</p>
      <h5 class="py-lg-3">
        When 2 articles are sold at a same selling price getting gain x%
        on the 1st & loss of x% on the 2nd, the overall %loss is
        x<sup>2</sup>/100 or x+y+(xy/100)
      </h5>
      <div class="container">
        <h3>Question :</h3>
        <p>
          The cost price of 20 articles is the same as the selling price
          of x articles. If the profit is 25%, then the value of x is:
        </p>
      </div>
    </div>
    <div class="answer p-3">
      <h3 style="display: inline">Answer:</h3>
      <span style="padding: 0px 17px; color: brown">16</span>
      <h3>Explaination :</h3>
    </div>
    <div class="container p-3" id="explain_text">
      <p>
        Let C.P. of each article be Re. 1 C.P. of x articles = Rs. x.
        <br />
        S.P. of x articles = Rs. 20. <br />
        Profit = Rs. (20 - x). <br />
        [(20 - x)/x] * 100 = 25 <br />
        2000 - 100x = 25x <br />
        125x = 2000 <br />
        x = 16.
      </p>
    </div>
    <figcaption class="figure-caption text-end">
      <b>PROFIT AND LOSS</b>
    </figcaption>
  </figure>`,
  },
  {
    id: 11,
    title: "ANALOGY",
    data: `<figure class="figure">
    <div class="figure-img rounded container">
      <div class="container">
        <div class="py-5">
          <p>
            In Analogy type of questions, we should go through diagram and
            find the answer. If there is options, check possibilities with
            options and eleminate other options.
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <h3>Examples :</h3>
      <div class="py-5">
        <img
          src="assets/Analogy1.png"
          alt="Analogy_1st_diagram"
          width="250"
        />
        <p class="d-inline-block px-2">
          In this question if we match horizontally we can see 1st object
          is mixing of 2nd & 3rd object. So the answer is:
        </p>
        <img
          src="assets/Analogy1Answer.png"
          alt="Analogy_1st_diagram_answer"
          width="70"
        />
      </div>
      <div class="py-5">
        <img
          src="assets/Analogy2.png"
          alt="Analogy_2nd_diagram"
          width="250"
        />
        <p class="d-inline-block px-2">
          It is same as 1st question . So the answer is:
        </p>
        <img
          src="assets/Analogy2Answer.png"
          alt="Analogy_1st_diagram_answer"
          width="70"
        />
      </div>
      <div class="py-5">
        <img
          src="assets/Analogy3.png"
          alt="Analogy_3rd_diagram"
          width="275"
        />
        <p class="d-inline-block px-2">
          In this question we have to find out how many triangles present,
          As you can see in 1st triangle there is only
          <code>1</code> triangle, in 2nd triangle there is
          <code>Line</code> inside a triangle so, there are
          <code>3</code> triangles & last diagram there is another
          triangle inside a triangle also there is a line inside inner
          triangle so there are <code>6</code> triangle present.
        </p>
      </div>
      <div class="py-5">
        <img
          src="assets/Analogy4.png"
          alt="Analogy_4th_diagram"
          width="200"
        />
        <p class="d-inline-block px-2">
          In this question we have to find out how many triangles present
          in this diagram. As you can see there are 2 triangle present
          inside a triangele. In this type of question there is a simple
          formula <code>4N-3</code> where
          <code>N= number of triangles</code> so, answer is :
        </p>
        <p>4*3 - 3 = 9</p>
      </div>
    </div>
    <figcaption class="figure-caption text-end">
      <b>ANALOGY</b>
    </figcaption>
  </figure>`,
  },
  {
    id: 12,
    title: "TIME SPEED & DISTANCE",
    data: `<figure class="figure">
    <div class="figure-img rounded container">
      <img
        src="assets/speed_formula1.png"
        alt=""
        class="d-block m-auto"
      />
      <p class="m-auto text-xl-center">
        if we want
        <img src="assets/speed_formula3.png" alt="" width="150" /> ->
        <img src="assets/speed_formula2.png" alt="" width="150" /> then
        it will be
        <img src="assets/speed_formula4.png" alt="" width="180" />
      </p>
      <h3 class="text-decoration-underline">Important Notes:</h3>
      <p>
        1. Time taken by a train to cross a tree or pole
        completely.(Static object without motion & length can be
        negligable) => t =
        <img src="assets/speed_formula5.png" alt="" width="85" />
      </p>
      <p>
        2. Time taken by a train to cross a platfrom completely.(length
        can't be negligable) => t =
        <img src="assets/speed_formula6.png" alt="" width="85" />
      </p>
      <p>
        3. Time taken by a person 'A' to reach point 'B'. => t =
        <img src="assets/speed_formula7.png" alt="" width="85" />
      </p>
      <p>
        4. Time taken by a person 'A' to reach person 'B' or to cross
        person 'B' or to overtake person 'B'. => <br />
        t =
        <img src="assets/speed_formula8.png" alt="" width="85" /> (Same
        Direction) <br />
        t =
        <img src="assets/speed_formula9.png" alt="" width="85" />
        (Opposite Direction)
      </p>
      <p>
        5. Time taken by a train 'A' to reach or cross or overtake point
        'B'. => t =
        <img src="assets/speed_formula10.png" alt="" width="95" />
      </p>
      <p>
        6. Time taken by 2 train 'A' & 'B' to cross or meet or overtake.
        => t =
        <img src="assets/speed_formula11.png" alt="" width="95" />
      </p>
      <div class="container">
        <h3>Example :</h3>
        <p>
          If you travel with the speed of 20 km/h, you will reach a place
          at 7 p.m , if you travel 40km/h, you will reach the place at 5
          p.m. Find out the distance between starting & ending point
        </p>
      </div>
      <div class="container p-3">
        <h3 style="display: inline">Answer:</h3>
        <p class="d-inline mx-3">80 KM</p>
      </div>
      <div class="p-3">
        <h3>Explaination :</h3>
        <p>
          At first let, distance = x <br />
          <br />
          then for 20km/h time will be x/20 & for 40km/h time will be x/40
          <br />
          <br />
          time difference is 2 hours, so according to question <br />
          <br />
          x/20 - x/40 = 2 <br />
          <br />
          (2x - x)/40 = 2 <br />
          <br />
          x = 40 * 2 = 80
        </p>
      </div>
    </div>
    <figcaption class="figure-caption text-end">
      <b id="title">TIME SPEED & DISTANCE</b>
    </figcaption>
  </figure>`,
  },
  {
    id: 13,
    title: "SYLLOGISM",
    data: `<figure class="figure">
    <div class="figure-img rounded container">
      <p>
        Syllogisms are a logical argument of statements using deductive
        reasoning to arrive at a conclusion. The major contribution to the
        filed of syllogisms is attributed to Aristotle.The questions of
        syllogisms of three main parts.
      </p>
      <ol>
        <li>Major premise</li>
        <li>Minor premise</li>
        <li>Conclusion</li>
      </ol>
      <div class="container">
        <h3>Example :</h3>
        <p>
          Major premise: All Actors are right-handed. <br />
          <br />

          Minor premise: All right-handed are Artists. <br />
          <br />

          The conclusion is: Some Artists are Actors.
        </p>
        <img
          src="assets/syllogism1.png"
          alt="syllogism_example"
          width="475"
        />
      </div>
      <div class="container p-3">
        <h3 style="display: inline">Answer:</h3>
        <p class="d-inline mx-3">Incorrect</p>
      </div>
      <div class="p-3">
        <h3>Explaination :</h3>
        <h5>Case 1:</h5>
        <p>
          The Venn diagram of actors is inside right-handed and which in
          turn is inside the Venn of artists. According to the diagram,
          the portion of the red Venn diagram overlapping with green
          indicates that some actors artist are actors. Hence the
          conclusion is correct according to this diagram, but can not be
          concluded as the final answer until the second case is checked.
        </p>
        <h5>Case 2:</h5>
        <p>
          Since all the Venn diagrams are overlapping with each other,
          according to the diagram all the artists are actors or all the
          actors are artists. Hence the conclusion is “ some artists are
          actors” is wrong. Since the conclusion is wrong according to the
          second Venn diagram
        </p>
      </div>
    </div>
    <figcaption class="figure-caption text-end">
      <b id="title">SYLLOGISM</b>
    </figcaption>
  </figure>`,
  },
];
